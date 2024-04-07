import React, { useState } from "react";
// import { toggleClick } from "./toggleClick";
// import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { writeUserData } from "../../services/dataServices";
import { Link } from "react-router-dom";
import { setToken } from "../../redux/pizzasSlice";
import { useDispatch } from "react-redux";

const Register = () => {
  const [toggleInput, setToggleInput] = useState("password");
  const [toggleIcon, setToggleIcon] = useState(false);
  const [toggleSecondIcon, setToggleSecondIcon] = useState(false);
  const dispatch = useDispatch();

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
      const { displayName, email, password, number } = data;

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        displayName,
        password,
        phoneNumber
      );

      console.log(userCredential);

      if (userCredential.user) {
        dispatch(setToken(userCredential.user.accessToken));

        const newUser = {
          uid: userCredential.user.uid,
          displayName: displayName,
          email: email,
          phoneNumber: phoneNumber,
        };
        // записуємо нового юзера в базу даних
        writeUserData(newUser);
      }

      reset();
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
      {/* <AuthText>{t("signform.orsign")}</AuthText> */}
      {/* <AuthList /> */}
      <Link to="/login">Log in</Link>
    </form>
  );
};

export default Register;
