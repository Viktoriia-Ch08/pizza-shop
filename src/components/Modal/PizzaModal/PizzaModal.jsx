import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOrder, selectPizzas } from "../../../redux/pizzas/selectors";
import { addOrder, changeQuantity } from "../../../redux/pizzas/pizzasSlice";
import { successfullNotification } from "../../../services/notifications";
import Toppings from "../../Toppings/Toppings";
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
  const toppingsName =
    chosenToppings.length > 0
      ? chosenToppings.map((topping) => topping.name).join("")
      : "";

  const toppingsPrice = chosenToppings.reduce(
    (partialSum, el) => partialSum + el.price,
    0
  );

  useEffect(() => {
    const index = pizzas.findIndex((pizza) => pizza.id === id);
    setChosenPizza(pizzas[index]);
    setPizzaPrice(pizzas[index].price + toppingsPrice);
  }, [toppingsPrice]);

  const saveOrder = () => {
    const newPizza = {
      ...chosenPizza,
      toppings: chosenToppings,
      id: `${chosenPizza.name}${toppingsName}`,
      quantity,
      price: pizzaPrice,
    };

    const existingPizzaIndex = order.findIndex(
      (pizza) => pizza.id === newPizza.id
    );

    if (existingPizzaIndex !== -1) {
      const pizza = order[existingPizzaIndex];
      debugger;
      dispatch(
        changeQuantity({
          index: existingPizzaIndex,
          quantity: pizza.quantity + newPizza.quantity,
          price: (price + toppingsPrice) * (pizza.quantity + newPizza.quantity),
        })
      );
      return;
    }

    dispatch(addOrder({ ...newPizza }));
    setShow(false);
    successfullNotification("Pizza successfully added");
  };

  const increaseQuantity = () => {
    // debugger;
    setQuantity((prev) => prev + 1);
    setPizzaPrice((prev) => prev + pizzaPrice);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => prev - 1);
    setPizzaPrice((prev) => prev - chosenPizza.price);
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
        Go to Cart
      </button>
    </div>
  );
};

export default PizzaModal;
