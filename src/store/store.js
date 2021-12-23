import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import themeReducer from "./slice/themeSlice";
import counterReducer from "./slice/counterSlice";

export const store = configureStore({
  reducer: {
    userSlice: userReducer,
    themeSlice: themeReducer,
    counterSlice: counterReducer,
  },
});
