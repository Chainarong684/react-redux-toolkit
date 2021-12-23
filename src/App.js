import React from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Theme from "./components/Theme";
import User from "./components/User";

const App = () => {
  return (
    <div className="App">
      <h1>Redux Toolkit</h1>
      <Counter />
      <User />
      <Button btn1={"Login"} btn2={"Logut"} />
      <Theme />
    </div>
  );
};

export default App;
