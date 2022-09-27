import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./popup";

const store = configureStore({
  reducer: { popup: popupReducer },
});

export default store;
