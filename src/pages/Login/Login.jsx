import React, { useState } from "react";
// import { toggleClick } from "../SignUpPage/toggleClick";
// import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
// import { readUserData } from "../../services/dataServices";

const Login = () => {
  const [toggleInput, setToggleInput] = useState("password");
  const [toggleIcon, setToggleIcon] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm();

  const logIn = async (data) => {
    debugger;
    try {
      const { email, password } = data;
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      // try {
      //   const user = await readUserData(userCredential.user.uid);
      //   console.log(user);
      //   const { username } = user;

      //   // logIn({ username, uid: userCredential.user.uid });
      // } catch (error) {}
      reset();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(logIn)}>
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
          type={toggleInput}
          {...register("password", { required: true })}
          placeholder="Password"
          className="form-control"
        />
        {/* <svg
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
      <button
        type="submit"
        disabled={!isValid}
        style={{
          backgroundColor: isValid ? "rgb(144, 64, 246)" : "#CFC5DC",
        }}
      >
        login
      </button>
    </form>
  );
};

export default Login;
