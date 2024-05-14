import { useEffect, useState } from "react";
import {
  LIMIT_NUMBER,
  getData,
  writeUserData,
} from "../../services/dataServices";
import {
  Card,
  CardSet,
  InfoWrap,
  OrderBtnWrap,
  PizzaImage,
} from "./Home.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPizzaTypeFilter,
  selectPizzas,
} from "../../redux/pizzas/selectors";
import { successfullNotification } from "../../services/notifications";
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

const Home = () => {
  const [limitedCards, setLimitedCards] = useState([]);
  const [limit, setLimit] = useState(LIMIT_NUMBER);
  const [lastPage, setLastPage] = useState(false);
  const [show, setShow] = useState(false);
  const pizzas = useSelector(selectPizzas);
  const [chosenPizzaId, setChosenPizzaId] = useState(null);
  const dispatch = useDispatch();
  const favorite = useSelector(selectFavorite);
  const user = useSelector(selectUser);
  const isAuth = useSelector(selectIsAuth);
  const filteredType = useSelector(selectPizzaTypeFilter);

  useEffect(() => {
    const fetchLimitedCardsNumber = async () => {
      setLimitedCards(await getData(limit));
    };
    fetchLimitedCardsNumber();
  }, [limit]);

  useEffect(() => {
    if (filteredType === "") return;
    filterCards(filteredType);
  }, [filteredType]);

  useEffect(() => {
    if (!favorite) return;
    writeUserData({ ...user, favorite: [...favorite] });
  }, [favorite]);

  const getNextCards = () => {
    if (limit + LIMIT_NUMBER >= pizzas.length) {
      setLastPage(true);
      successfullNotification("You rich the end of the list!");
    }
    setLimit((prev) => prev + LIMIT_NUMBER);
  };

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
    const newList = pizzas.filter((el) => el.type === filteredType);
    console.log(newList);
    dispatch(filterPizzas(newList));
  };

  return (
    <section className="main-container">
      {pizzas.length > 0 && (
        <>
          <Filters />
          <CardSet>
            {limitedCards.map(
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
          {!lastPage && (
            <Button onClick={() => getNextCards()}>Load More...</Button>
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
