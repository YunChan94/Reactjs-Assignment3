import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./popup";
import productDataReducer from "./productData";
const store = configureStore({
  reducer: { popup: popupReducer, productData: productDataReducer },
});

export default store;
