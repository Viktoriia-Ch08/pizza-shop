import { useDispatch, useSelector } from "react-redux";
import { selectOrder } from "../../redux/selectors";
import { deleteFromOrder } from "../../redux/pizzasSlice";

const ShoppingList = () => {
  const order = useSelector(selectOrder);
  const dispatch = useDispatch();

  const deleteFromOrderList = (id) => {
    const pizzaToDelete = order.find((pizza) => pizza.id === id);
    if (pizzaToDelete !== undefined) {
      dispatch(deleteFromOrder(pizzaToDelete));
      return;
    }
  };

  return (
    <div>
      <ul>
        {order.length > 0 &&
          order.map(
            ({ name, description, type, price, imageUrl, toppings, id }) => {
              return (
                <li>
                  <img src={imageUrl} alt={name} />
                  <h2>{name}</h2>
                  <p>{description}</p>
                  <p>{type}</p>
                  <p>{price}</p>
                  <ul>
                    {toppings.map((topping) => {
                      return (
                        <li>
                          <p>{topping.name}</p>
                        </li>
                      );
                    })}
                  </ul>
                  <button type="button" onClick={() => deleteFromOrderList(id)}>
                    delete from cart
                  </button>
                </li>
              );
            }
          )}
      </ul>
    </div>
  );
};

export default ShoppingList;
