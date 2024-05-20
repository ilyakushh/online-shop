import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  subTotal: 0,
  grandTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
    increment: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem && existingItem.quantity < 50) {
        existingItem.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },
    calculateSubTotal: (state) => {
      state.subTotal = state.cartItems.reduce(
        (acc, cur) => acc + cur.price * cur.quantity,
        0
      );
    },
    calculateGrandTodal: (state, action) => {
      state.grandTotal = state.subTotal + action.payload;
    },
  },
});

export const {
  addtoCart,
  increment,
  decrement,
  calculateGrandTodal,
  calculateSubTotal,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
