import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectPizzas } from "../../../redux/selectors";
import { ToppingImage } from "../../../pages/Catalog/Catalog.styled";
import { ToppingBtn } from "./PizzaModal.styled";

const PizzaModal = ({ id }) => {
  const pizzas = useSelector(selectPizzas);
  const [chosenPizza, setChosenPizza] = useState({});
  const [chosenToppings, setChosenToppings] = useState([]);
  const [isChosenTopping, setChosenTopping] = useState(false);

  useEffect(() => {
    const index = pizzas.findIndex((pizza) => pizza.id === id);
    setChosenPizza(pizzas[index]);
  }, []);
  const { name, description, type, price, imageUrl, toppings } = chosenPizza;

  const chooseTopping = (id) => {
    if (chosenToppings.length < 0) {
      return;
    }

    const index = toppings.findIndex((topping) => topping.id === id);
    const topping = toppings[index];
    const isExistingTopping = chosenToppings.findIndex(
      (el) => el.id === topping.id
    );

    if (isExistingTopping !== -1) {
      setChosenToppings([
        ...chosenToppings.filter((el) => el.id !== topping.id),
      ]);
      document.body.classList.remove("chosen-topping");
      return;
    }
    setChosenToppings([...chosenToppings, topping]);
    document.body.classList.add("chosen-topping");
  };

  return (
    <div style={{ width: "300px", height: "300px" }}>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{type}</p>
      <p>{price}</p>
      <ul>
        {Object.keys(chosenPizza).length &&
          toppings.map(({ name, portion, price, imageUrl, id }) => {
            return (
              <li key={`${name}${portion}${price}`}>
                <ToppingBtn
                  type="button"
                  onClick={() => {
                    chooseTopping(id);
                    setChosenTopping(true);
                  }}
                  className="topping"
                >
                  <ToppingImage src={imageUrl} alt={name} />
                  <p>{name}</p>
                  <p>{portion}</p>
                  <p>{price}$</p>
                </ToppingBtn>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default PizzaModal;
