import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeColor } = themeSlice.actions;
export default themeSlice.reducer;
