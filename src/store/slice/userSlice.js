import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { name: "", age: null, email: "" },
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialState;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
