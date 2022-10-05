import { createSlice } from "@reduxjs/toolkit";
import { saveToStorage, deleteFromStorage } from "../lib/storage";
const initialCartState = { listCart: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addCart(state, item) {},
    updateCart() {},
    deleteCart() {},
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
