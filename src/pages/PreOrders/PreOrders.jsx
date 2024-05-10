import { useSelector } from "react-redux";
import { selectPreOrders } from "../../redux/user/selectors";
import { nanoid } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

const PreOrders = () => {
  const preOrders = useSelector(selectPreOrders);
  return (
    <>
      {preOrders ? (
        <ul>
          {preOrders.map(({ data, id, phoneNumber, order }) => {
            return (
              <li key={`${id}${data}${nanoid()}`}>
                <div>
                  <p>{id}</p>
                  <p>{data}</p>
                  <p>{phoneNumber}</p>
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
                          <li key={`${name}${type}${nanoid()}`}>
                            <img src={imageUrl} alt={name} />
                            <h2>{name}</h2>
                            <p>{description}</p>
                            <p>{type}</p>
                            <p>{price}</p>
                            <p>{quantity}</p>

                            <ul>
                              {toppings &&
                                toppings.map((topping) => {
                                  return (
                                    <li key={`${id}${nanoid()}${topping.name}`}>
                                      <p>{topping.name}</p>
                                    </li>
                                  );
                                })}
                            </ul>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>
          <p>
            You didn't order pizza before. You can look at our catalog by
            clicking on the button below:
          </p>
          <button>
            <Link to={"/"}>Catalog</Link>
          </button>
        </div>
      )}
    </>
  );
};

export default PreOrders;
