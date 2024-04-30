import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { selectOrder } from "../../../redux/pizzas/selectors";

const schema = yup
  .object({
    number: yup.string().min(7).max(9).required(),
  })
  .required();

const ConfirmModal = ({ setShow, setConfirmed }) => {
  const order = useSelector(selectOrder);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendOrder = async () => {
    try {
      debugger;
      await writeOrderData({
        userId: nanoid(),
        orders: {
          id: nanoid(),
          order,
        },
      });
      //   setConfirmed(true);
    } catch (error) {}
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
