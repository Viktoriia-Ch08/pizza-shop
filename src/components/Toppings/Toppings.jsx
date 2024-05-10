import { ToppingImage } from "../../pages/Home/Home.styled";

const Toppings = ({
  chosenPizza,
  toppings,
  chosenToppings,
  setChosenToppings,
}) => {
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
      return;
    }
    setChosenToppings([...chosenToppings, topping]);
  };
  return (
    <>
      {Object.keys(chosenPizza).length &&
        toppings.map(({ name, portion, price, imageUrl, id }) => {
          return (
            <li key={`${name}${portion}${price}`}>
              <label>
                <input type="checkbox" onClick={() => chooseTopping(id)} />
                <ToppingImage src={imageUrl} alt={name} />
                <p>{name}</p>
                <p>{portion}</p>
                <p>{price}$</p>
              </label>
            </li>
          );
        })}
    </>
  );
};

export default Toppings;
