import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../store/slice/themeSlice";

const Theme = () => {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input type="text" placeholder="Type color" onChange={(e) => setColor(e.target.value)} />
      <button onClick={() => dispatch(changeColor(color))}>Change</button>
    </div>
  );
};

export default Theme;
