import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { selectOrder } from "../../../redux/pizzas/selectors";
import { writeUserData } from "../../../services/dataServices";
import {
  selectPreviousOrders,
  selectUser,
} from "../../../redux/user/selectors";
import { addToOrders } from "../../../redux/user/userSlice";
import { clearOrder } from "../../../redux/pizzas/pizzasSlice";

const schema = yup
  .object({
    number: yup.string().min(7).max(9).required(),
  })
  .required();

const ConfirmModal = ({ setShow, setConfirmed }) => {
  const order = useSelector(selectOrder);
  const user = useSelector(selectUser);
  const previousOrders = useSelector(selectPreviousOrders);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendOrder = async () => {
    try {
      dispatch(
        addToOrders({
          id: nanoid(),
          order,
        })
      );
      await writeUserData({
        ...user,
        orders: previousOrders
          ? [
              ...previousOrders,
              {
                id: nanoid(),
                order,
              },
            ]
          : [
              {
                id: nanoid(),
                order,
              },
            ],
      });
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
