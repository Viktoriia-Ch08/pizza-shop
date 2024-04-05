import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOrder, selectPizzas } from "../../../redux/selectors";
import { addOrder, changeAmount } from "../../../redux/pizzasSlice";
import { successfullNotification } from "../../../services/notifications";
import Toppings from "../../Toppings/Toppings";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const PizzaModal = ({ id, setShow }) => {
  const pizzas = useSelector(selectPizzas);
  const order = useSelector(selectOrder);
  const [chosenPizza, setChosenPizza] = useState({});
  const [chosenToppings, setChosenToppings] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [pizzaPrice, setPizzaPrice] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, description, type, price, imageUrl, toppings } = chosenPizza;

  useEffect(() => {
    const index = pizzas.findIndex((pizza) => pizza.id === id);
    setChosenPizza(pizzas[index]);
    setPizzaPrice(pizzas[index].price);
  }, []);

  const saveOrder = () => {
    const toppingsName =
      chosenToppings.length > 0
        ? chosenToppings.map((topping) => topping.name).join("")
        : "";

    const newPizza = {
      ...chosenPizza,
      toppings: chosenToppings,
      id: `${chosenPizza.name}${toppingsName}`,
      quantity,
      price: pizzaPrice * quantity,
    };

    const existingPizzaIndex = order.findIndex(
      (pizza) => pizza.id === newPizza.id
    );

    const pizza = order[existingPizzaIndex];

    if (existingPizzaIndex !== -1) {
      dispatch(
        changeAmount({
          index: existingPizzaIndex,
          quantity: pizza.quantity + newPizza.quantity,
          price: price * (pizza.quantity + newPizza.quantity),
        })
      );
      return;
    }

    dispatch(addOrder({ ...newPizza }));
    setShow(false);
    successfullNotification("Pizza successfully added");
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => prev - 1);
  };

  return (
    <div style={{ width: "300px", height: "300px" }}>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{type}</p>
      <p>{pizzaPrice}</p>
      <ul>
        <Toppings
          chosenPizza={chosenPizza}
          toppings={toppings}
          chosenToppings={chosenToppings}
          setChosenToppings={setChosenToppings}
        />
      </ul>
      <button type="button" onClick={decreaseQuantity} disabled={quantity <= 1}>
        -
      </button>
      <p>{quantity}</p>
      <button
        type="button"
        onClick={increaseQuantity}
        disabled={quantity >= 10}
      >
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
