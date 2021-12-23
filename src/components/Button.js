import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/slice/userSlice";

const Button = ({ btn1, btn2 }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            login({
              name: "test",
              age: 20,
              email: "test@test.test",
            })
          )
        }
      >
        {btn1}
      </button>
      <button onClick={() => dispatch(logout())}>{btn2}</button>
    </div>
  );
};

export default Button;
