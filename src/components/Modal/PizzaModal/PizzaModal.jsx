import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOrder, selectPizzas } from "../../../redux/selectors";
import { addOrder } from "../../../redux/pizzasSlice";
import { successfullNotification } from "../../../services/notifications";
import Toppings from "../../Toppings/Toppings";
import { nanoid } from "@reduxjs/toolkit";

const PizzaModal = ({ id, setShow }) => {
  const pizzas = useSelector(selectPizzas);
  const [chosenPizza, setChosenPizza] = useState({});
  const [chosenToppings, setChosenToppings] = useState([]);
  const dispatch = useDispatch();
  const { name, description, type, price, imageUrl, toppings } = chosenPizza;

  useEffect(() => {
    const index = pizzas.findIndex((pizza) => pizza.id === id);
    setChosenPizza(pizzas[index]);
  }, []);

  const saveOrder = () => {
    // const isPizzaOrdered = order.some(
    //   (pizza) => pizza.name === chosenPizza.name
    // );
    // if (isPizzaOrdered) {
    //   alert("pizza was already added");
    //   return;
    // }

    dispatch(
      addOrder({ ...chosenPizza, toppings: chosenToppings, id: nanoid() })
    );
    setShow(false);
    successfullNotification("Pizza successfully added");
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
      <button type="button" onClick={saveOrder}>
        Add to cart
      </button>
    </div>
  );
};

export default PizzaModal;
