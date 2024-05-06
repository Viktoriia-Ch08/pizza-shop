import { useDispatch, useSelector } from "react-redux";
import {
  changeQuantity,
  deleteFromOrder,
} from "../../redux/orders/ordersSlice";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import { nanoid } from "nanoid";
import GreetingModal from "../../components/Modal/GreetingModal/GreetingModal";
import ConfirmModal from "../../components/Modal/ConfirmModal/ConfirmModal";
import { selectOrder } from "../../redux/orders/selectors";
import { Link } from "react-router-dom";

const ShoppingList = () => {
  const order = useSelector(selectOrder);
  const [show, setShow] = useState(false);
  const [isConfirmed, setConfirmed] = useState(false);
  const dispatch = useDispatch();

  const deleteFromOrderList = (id) => {
    const pizzaToDelete = order.find((pizza) => pizza.id === id);
    if (pizzaToDelete !== undefined) {
      dispatch(deleteFromOrder(pizzaToDelete));
      return;
    }
  };

  return (
    <>
      {order.length > 0 ? (
        <div>
          <ul>
            {order.map(
              ({
                name,
                description,
                type,
                price,
                imageUrl,
                toppings,
                id,
                quantity,
              }) => {
                return (
                  <li key={`${id}${name}${id}`}>
                    <img src={imageUrl} alt={name} />
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p>{type}</p>
                    <p>{price}</p>
                    <ul>
                      {toppings.map((topping) => {
                        return (
                          <li key={`${id}${nanoid()}`}>
                            <p>{topping.name}</p>
                          </li>
                        );
                      })}
                    </ul>
                    <button
                      type="button"
                      onClick={() => {
                        const pizzaPrice = price / quantity;
                        dispatch(
                          changeQuantity({
                            index: order.findIndex((pizza) => pizza.id === id),
                            quantity: quantity - 1,
                            price: price - pizzaPrice,
                          })
                        );
                      }}
                      disabled={quantity === 1}
                    >
                      -
                    </button>
                    <p>x{quantity}</p>
                    <button
                      type="button"
                      onClick={() => {
                        const pizzaPrice = price / quantity;
                        dispatch(
                          changeQuantity({
                            index: order.findIndex((pizza) => pizza.id === id),
                            quantity: quantity + 1,
                            price: price + pizzaPrice,
                          })
                        );
                      }}
                      disabled={quantity === 10}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteFromOrderList(id)}
                    >
                      delete from cart
                    </button>
                  </li>
                );
              }
            )}
          </ul>
          <button type="button" onClick={() => setShow(true)}>
            Confirm order
          </button>
        </div>
      ) : (
        <div>
          <p>
            Your cart is empty! You can see all pizzas by clicking on the button
            below
          </p>
          <button>
            <Link to={"/catalog"}>Catalog</Link>
          </button>
        </div>
      )}

      {show && (
        <Modal setShow={setShow}>
          <ConfirmModal setShow={setShow} setConfirmed={setConfirmed} />
        </Modal>
      )}
      {isConfirmed && (
        <Modal setShow={setConfirmed}>
          <GreetingModal />
        </Modal>
      )}
    </>
  );
};

export default ShoppingList;
