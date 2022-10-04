import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./popup";
import loginReducer from "./login";
import cartReducer from "./cart";
const store = configureStore({
  reducer: { popup: popupReducer, login: loginReducer, cart: cartReducer },
});

export default store;
