import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantity: 1,
};

export const quantitySlice = createSlice({
  name: "quantity",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.quantity < 50) {
        state.quantity += 1;
      }
    },
    decrement: (state) => {
      if (state.quantity > 1) {
        state.quantity -= 1;
      }
    },
  },
});

export const { increment, decrement } = quantitySlice.actions;

export default quantitySlice.reducer;
