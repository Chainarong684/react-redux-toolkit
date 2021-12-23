import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    byAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const byAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(byAmount(amount));
  }, 1000);
};

export const { increment, decrement, byAmount } = counterSlice.actions;
export default counterSlice.reducer;
