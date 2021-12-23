import React from "react";
import { useSelector } from "react-redux";

const User = () => {
  const user = useSelector((state) => state.userSlice.value);
  const theme = useSelector((state) => state.themeSlice.value);

  return (
    <div style={{ color: theme }}>
      <h1>Profile color {theme}</h1>
      <ul>
        <li>Name: {user.name}</li>
        <li>Age: {user.age}</li>
        <li>Email: {user.email}</li>
      </ul>
    </div>
  );
};

export default User;
