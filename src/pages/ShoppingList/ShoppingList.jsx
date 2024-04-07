import { useDispatch, useSelector } from "react-redux";
import { selectOrder } from "../../redux/selectors";
import { changeQuantity, deleteFromOrder } from "../../redux/dataSlice";
import Modal from "../../components/Modal/Modal";
import ConfirmModal from "../../components/Modal/ConfirmModal/ConfirmModal";
import { useState } from "react";
import { nanoid } from "nanoid";
import GreetingModal from "../../components/Modal/GreetingModal/GreetingModal";

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

  const finishOrder = () => {
    setShow(true);
  };

  return (
    <>
      <div>
        <ul>
          {order.length > 0 &&
            order.map(
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
        <button type="button" onClick={finishOrder}>
          Confirm order
        </button>
      </div>
      {show && (
        <Modal setShow={setShow}>
          <ConfirmModal setShow={setShow} setConfirmed={setConfirmed} />
        </Modal>
      )}
      {isConfirmed && (
        <Modal setShow={setConfirmed}>
          <GreetingModal setShow={setConfirmed} />
        </Modal>
      )}
    </>
  );
};

export default ShoppingList;
