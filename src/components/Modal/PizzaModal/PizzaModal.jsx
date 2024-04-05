import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOrder, selectPizzas } from "../../../redux/selectors";
import { addOrder } from "../../../redux/pizzasSlice";
import { successfullNotification } from "../../../services/notifications";
import Toppings from "../../Toppings/Toppings";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const PizzaModal = ({ id, setShow }) => {
  const pizzas = useSelector(selectPizzas);
  const [chosenPizza, setChosenPizza] = useState({});
  const [chosenToppings, setChosenToppings] = useState([]);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, description, type, price, imageUrl, toppings } = chosenPizza;

  useEffect(() => {
    const index = pizzas.findIndex((pizza) => pizza.id === id);
    setChosenPizza(pizzas[index]);
  }, []);

  const saveOrder = () => {
    dispatch(
      addOrder({
        ...chosenPizza,
        toppings: chosenToppings,
        id: nanoid(),
        amount,
      })
    );
    setShow(false);
    successfullNotification("Pizza successfully added");
  };

  const increaseAmount = () => {
    setAmount((prev) => prev + 1);
  };

  const decreaseAmount = () => {
    setAmount((prev) => prev - 1);
  };

  return (
    <div style={{ width: "300px", height: "300px" }}>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{type}</p>
      <p>{price}</p>
      <ul>
        <Toppings
          chosenPizza={chosenPizza}
          toppings={toppings}
          chosenToppings={chosenToppings}
          setChosenToppings={setChosenToppings}
        />
      </ul>
      <button type="button" onClick={decreaseAmount} disabled={amount <= 1}>
        -
      </button>
      <p>{amount}</p>
      <button type="button" onClick={increaseAmount} disabled={amount >= 10}>
        +
      </button>
      <button type="button" onClick={saveOrder}>
        Add to cart
      </button>
      <button
        type="button"
        onClick={() => {
          setShow(false);
          navigate("/shopping-list");
        }}
      >
        {" "}
        Go to Cart
      </button>
    </div>
  );
};

export default PizzaModal;
