import { useEffect, useState } from "react";
import { LIMIT_NUMBER, writeUserData } from "../../services/dataServices";
import {
  Card,
  CardSet,
  InfoWrap,
  OrderBtnWrap,
  PizzaImage,
} from "./Home.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLimitedPizzas,
  selectPizzaTypeFilter,
  selectPizzas,
} from "../../redux/pizzas/selectors";
import { Button } from "../../App.styled";
import Modal from "../../components/Modal/Modal";
import PizzaModal from "../../components/Modal/PizzaModal/PizzaModal";
import { addToFavorite, deleteFromFavorite } from "../../redux/user/userSlice";
import {
  selectFavorite,
  selectIsAuth,
  selectUser,
} from "../../redux/user/selectors";
import Filters from "../../components/Filters/Filters";
import { filterPizzas } from "../../redux/pizzas/pizzasSlice";
import { fetchNextPizzas } from "../../redux/pizzas/operations";
import { successfullNotification } from "../../services/notifications";

const Home = () => {
  const [show, setShow] = useState(false);
  const [chosenPizzaId, setChosenPizzaId] = useState(null);

  const pizzas = useSelector(selectPizzas);
  const favorite = useSelector(selectFavorite);
  const user = useSelector(selectUser);
  const isAuth = useSelector(selectIsAuth);
  const filteredType = useSelector(selectPizzaTypeFilter);
  const limitedPizzas = useSelector(selectLimitedPizzas);

  const dispatch = useDispatch();

  useEffect(() => {
    if (filteredType === "") return;
    filterCards(filteredType);
  }, [filteredType]);

  useEffect(() => {
    if (!favorite) return;
    writeUserData({ ...user, favorite: [...favorite] });
  }, [favorite]);

  const toggleFavorite = (newFavorite) => {
    if (!favorite) {
      dispatch(addToFavorite(newFavorite));
      return;
    }

    const index = favorite.findIndex((el) => el.id === newFavorite.id);

    if (index === -1) {
      dispatch(addToFavorite(newFavorite));
      return;
    }

    dispatch(deleteFromFavorite(newFavorite));
  };

  const filterCards = () => {
    if (filteredType === "all") {
      dispatch(filterPizzas(pizzas));
      return;
    }
    const newList = pizzas.filter((el) => el.type === filteredType);
    dispatch(filterPizzas(newList));
  };

  const loadMoreCards = () => {
    if (limitedPizzas.length + LIMIT_NUMBER >= pizzas.length) {
      successfullNotification("You rich the end of the list!");
    }
    dispatch(fetchNextPizzas());
  };

  return (
    <section className="main-container">
      {limitedPizzas.length > 0 && (
        <>
          <Filters />
          <CardSet>
            {limitedPizzas.map(
              ({ name, description, type, price, imageUrl, id }) => {
                return (
                  <Card key={`${name}${price}${type}`}>
                    {isAuth && (
                      <button
                        onClick={() => {
                          toggleFavorite({
                            name,
                            description,
                            type,
                            price,
                            imageUrl,
                            id,
                          });
                        }}
                      >
                        love
                      </button>
                    )}
                    <InfoWrap>
                      <PizzaImage src={imageUrl} alt={name} />
                      <h2>{name}</h2>
                      <p>{description}</p>
                    </InfoWrap>
                    <OrderBtnWrap>
                      <Button
                        type="button"
                        onClick={() => {
                          setChosenPizzaId(id);
                          setShow(true);
                        }}
                      >
                        Order
                      </Button>
                      <p>{price}$</p>
                    </OrderBtnWrap>
                  </Card>
                );
              }
            )}
          </CardSet>
          {filteredType === "" && !(limitedPizzas.length >= pizzas.length) && (
            <Button onClick={() => loadMoreCards()}>Load More...</Button>
          )}
        </>
      )}

      {show && (
        <Modal setShow={setShow}>
          <PizzaModal id={chosenPizzaId} setShow={setShow} />
        </Modal>
      )}
    </section>
  );
};

export default Home;
