import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { selectOrder } from "../../../redux/orders/selectors";
import { writeOrdersData, writeUserData } from "../../../services/dataServices";
import {
  selectPhoneNumber,
  selectPreviousOrders,
  selectUser,
} from "../../../redux/user/selectors";
import { addToOrders } from "../../../redux/user/userSlice";
import {
  addToConfirmedOrders,
  clearOrder,
} from "../../../redux/orders/ordersSlice";

const schema = yup
  .object({
    number: yup.string().min(7).max(9).required(),
  })
  .required();

const ConfirmModal = ({ setShow, setConfirmed }) => {
  const order = useSelector(selectOrder);
  const user = useSelector(selectUser);
  const previousOrders = useSelector(selectPreviousOrders);
  const phone = useSelector(selectPhoneNumber);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendOrder = async ({ number }) => {
    try {
      const newOrder = {
        id: nanoid(),
        phoneNumber: number,
        data: new Date().toLocaleTimeString(),
        isDone: false,
        order,
      };

      if (Object.keys(user).length) {
        dispatch(addToOrders(newOrder));
        await writeUserData({
          ...user,
          orders: previousOrders ? [...previousOrders, newOrder] : [newOrder],
        });
      }
      dispatch(addToConfirmedOrders(newOrder));
      await writeOrdersData(newOrder);

      dispatch(clearOrder());
      setShow(false);
      setConfirmed(true);
    } catch (error) {
      console.log(error.message);
    }
    setShow(false);
  };

  return (
    <div style={{ width: "300px", height: "300px" }}>
      <p>
        Write your number correctly and our manager will call you for checking
        details!
      </p>
      <form onSubmit={handleSubmit(sendOrder)}>
        <label>
          {errors.number && <span>{errors.number.message}</span>}
          <input
            placeholder="233-22-22"
            defaultValue={phone ? phone : ""}
            {...register("number", {
              required: true,
            })}
          />
        </label>
        <button type="submit">Confirm the order</button>
      </form>
    </div>
  );
};

export default ConfirmModal;
