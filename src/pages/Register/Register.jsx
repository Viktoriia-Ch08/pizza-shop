import React, { useEffect, useState } from "react";
// import { toggleClick } from "./toggleClick";
// import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { writeUserData } from "../../services/dataServices";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerThunk } from "../../redux/user/operations";
import { selectUser } from "../../redux/user/selectors";
import { auth } from "../../../firebase";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { updateUser } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [toggleInput, setToggleInput] = useState("password");
  const [toggleIcon, setToggleIcon] = useState(false);
  const [toggleSecondIcon, setToggleSecondIcon] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  // const [currentUser, setCurrentUser] = useState(null);
  // const [databaseUser, setDatabaseUser] = useState(null);

  const {
    handleSubmit,
    watch,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onTouched",
  });

  const signup = async (data) => {
    try {
      dispatch(registerThunk(data)).then((userInfo) => {
        const { displayName, email, phoneNumber } = data;

        const newUser = {
          uid: userInfo.payload.uid,
          displayName,
          email,
          phoneNumber,
        };

        writeUserData(newUser);

        dispatch(updateUser({ displayName, phoneNumber }));
        reset();
        navigate("/");
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const password = watch("password", "");

  return (
    <form onSubmit={handleSubmit(signup)}>
      <label>
        <input
          type="text"
          {...register("displayName", { required: true })}
          placeholder="Adam"
        />
      </label>
      <label>
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="email@gmail.com"
        />
        {errors.email && <span> {errors.email.message}</span>}
      </label>
      <label>
        <input
          type="tel"
          {...register("phoneNumber", { required: true })}
          placeholder="777-88-99"
        />
        {errors.number && <span> {errors.number.message}</span>}
      </label>
      <label>
        <input
          type={toggleInput}
          {...register("password", { required: true })}
          placeholder="Password"
          className="form-control"
        />
        {/* <SvgSpan
          onClick={() =>
            toggleClick(toggleInput, setToggleInput, setToggleIcon)
          }
        >
          {toggleIcon ? (
            <EyeIcon as={RiEyeOffLine} />
          ) : (
            <EyeIcon as={RiEyeLine} />
          )}
        </SvgSpan> */}
        {errors.password && <span>{errors.password.message}</span>}
      </label>
      <label>
        <input
          type={toggleInput}
          {...register("repeatPassword", {
            required: true,
            validate: (value) => value === password || "Passwords do not match",
          })}
          placeholder="Confirm Password"
          className="form-control"
        />
        {/* <SvgSpan
          onClick={() =>
            toggleClick(toggleInput, setToggleInput, setToggleSecondIcon)
          }
        >
          {toggleSecondIcon ? (
            <EyeIcon as={RiEyeOffLine} />
          ) : (
            <EyeIcon as={RiEyeLine} />
          )}
        </SvgSpan> */}
        {errors.repeatPassword && <span>{errors.repeatPassword.message}</span>}
      </label>

      <button
        type="submit"
        disabled={!isValid}
        style={{
          backgroundColor: isValid ? "rgb(144, 64, 246)" : "#CFC5DC",
        }}
      >
        Submit
      </button>
      <Link to="/login">Log in</Link>
    </form>
  );
};

export default Register;
