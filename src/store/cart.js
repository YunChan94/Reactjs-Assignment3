import { createSlice } from "@reduxjs/toolkit";
import { saveToStorage, getFromStorage } from "../lib/storage";

// Lấy dữ liệu currentUser,userArr từ localStorage
const userArr = getFromStorage("userArr") ? getFromStorage("userArr") : [];

// Lấy dữ liệu từ currentUser sau khi đăng nhập
const currentUser = getFromStorage("currentUser")
  ? getFromStorage("currentUser")
  : null;

let initialCartState;

if (currentUser) {
  if (currentUser.cart) {
    initialCartState = currentUser.cart;
  } else {
    initialCartState = { listCart: [], totalAmount: 0 };
  }
} else {
  initialCartState = { listCart: [], totalAmount: 0 };
}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addCart(state, payload) {
      const item = payload.payload.item;
      const amount = payload.payload.amount;
      console.log(item, amount);
      // Tính giá trị total
      const updatedTotalAmount = state.totalAmount + amount * item.price;
      // Check sản phẩm cùng tên có tồn tại chưa
      const existingCartItemIndex = state.listCart.findIndex(
        (product) => product._id.$oid === item._id.$oid
      );
      const existingCartItem = state.listCart[existingCartItemIndex];

      let updatedListCart;
      // Nếu đã có item trong giỏ hàng
      if (existingCartItem) {
        // Cộng thêm số lượng amount
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + amount,
        };
        updatedListCart = [...state.listCart];

        // Cập nhật giá trị mới vào array listCart
        updatedListCart[existingCartItemIndex] = updatedItem;
      } else {
        const addItem = { ...item, amount: amount };
        // Nếu không có item trong giở, thì cập nhật item đó vào thẳng listCart
        updatedListCart = state.listCart.concat(addItem);
      }

      return {
        listCart: updatedListCart,
        totalAmount: updatedTotalAmount,
      };
    },
    updateCart(state) {
      // Lưu dữ liệu giỏ hàng vào userArr ứng với từng tài khoản
      // Cập nhập vào prop cart vào object của tài khoản đó
      currentUser.cart = state;

      // Tìm index của currentUser trong userArr
      const currentUserIndex = userArr.findIndex(
        (user) => user.email === currentUser.email
      );

      //Cập nhật dữ liệu của currentUser vào userArr
      userArr[currentUserIndex] = currentUser;

      //Lưu lại vào localStorage
      saveToStorage("userArr", userArr);
      saveToStorage("currentUser", currentUser);
    },
    deleteCart(state, payload) {
      const item = payload.item;

      // Check sản phẩm cùng tên có tồn tại chưa
      const existingCartItemIndex = state.listCart.findIndex(
        (product) => product._id.$oid === item._id.$oid
      );
      const existingCartItem = state.listCart[existingCartItemIndex];

      // Tính lại giá trị total
      const updatedTotalAmount =
        state.totalAmount - Number(existingCartItem.price);

      let updatedListCart;
      //Nếu item có SL=1 thì lọc ra array không chứa giá trị của item đó (tức xóa item đó khỏi array mới)
      if (existingCartItem.amount === 1) {
        updatedListCart = state.items.filter(
          (product) => product._id.$oid !== item._id.$oid
        );
      } else {
        // Cập nhật lại số lượng của item
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };

        updatedListCart = [...state.listCart];

        // Cập nhật giá trị mới vào array items của context
        updatedListCart[existingCartItemIndex] = updatedItem;
      }
      return {
        listCart: updatedListCart,
        totalAmount: updatedTotalAmount,
      };
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
