import { useEffect, useState } from "react";
import { LIMIT_NUMBER, getData } from "../../../services/dataServices";
import {
  Card,
  CardSet,
  InfoWrap,
  OrderBtnWrap,
  PizzaImage,
  // ToppingImage,
} from "./Catalog.styled";
import { useSelector } from "react-redux";
import { selectPizzas } from "../../redux/selectors";
import { successfullNotification } from "../../../services/notifications";
import { Button } from "../../App.styled";
import Modal from "../../components/Modal/Modal";
import PizzaModal from "../../components/Modal/PizzaModal/PizzaModal";

const Catalog = () => {
  const [limitedCards, setLimitedCards] = useState([]);
  const [limit, setLimit] = useState(LIMIT_NUMBER);
  const [lastPage, setLastPage] = useState(false);
  const [show, setShow] = useState(false);
  const pizzas = useSelector(selectPizzas);
  const [chosenPizzaId, setChosenPizzaId] = useState(null);

  useEffect(() => {
    const fetchLimitedCardsNumber = async () => {
      setLimitedCards(await getData(limit));
    };
    fetchLimitedCardsNumber();
  }, [limit]);

  const getNextCards = () => {
    if (limit + LIMIT_NUMBER >= pizzas.length) {
      setLastPage(true);
      successfullNotification("You rich the end of the list!");
    }
    setLimit((prev) => prev + LIMIT_NUMBER);
  };

  return (
    <section className="main-container">
      {pizzas.length > 0 && (
        <CardSet>
          {limitedCards.map(
            ({ name, description, type, price, imageUrl, id }) => {
              return (
                <Card key={`${name}${price}${type}`}>
                  <InfoWrap>
                    <PizzaImage src={imageUrl} alt={name} />
                    <p>{name}</p>
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

                  {/* <div>
                    <ul>
                      {toppings.map(({ name, portion, price, imageUrl }) => {
                        return (
                          <li key={`${name}${portion}${price}`}>
                            <ToppingImage src={imageUrl} alt={name} />
                            <p>{name}</p>
                            <p>{portion}</p>
                            <p>{price}$</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div> */}
                </Card>
              );
            }
          )}
        </CardSet>
      )}
      {!lastPage && (
        <Button onClick={() => getNextCards()}>Load More...</Button>
      )}
      {show && (
        <Modal setShow={setShow}>
          <PizzaModal id={chosenPizzaId} />
        </Modal>
      )}
    </section>
  );
};

export default Catalog;
