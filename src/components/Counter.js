import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, byAmount, byAsync } from "../store/slice/counterSlice";

const Counter = () => {
  const [amount, setAmount] = useState(2);
  const counter = useSelector((state) => state.counterSlice.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={() => dispatch(byAmount(Number(amount)))}>Amount</button>
      <button onClick={() => dispatch(byAsync(Number(amount)))}>Async</button>
    </div>
  );
};

export default Counter;
