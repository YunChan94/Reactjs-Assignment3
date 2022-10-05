import { createSlice } from "@reduxjs/toolkit";
import { deleteFromStorage, getFromStorage } from "../lib/storage";

// Kiểm tra dữ liệu currentUser xem có đăng nhập chưa
const currentUser = getFromStorage("currentUser")
  ? getFromStorage("currentUser")
  : null;

let initialLoginState;
if (currentUser) {
  initialLoginState = { isLogin: true };
} else {
  initialLoginState = { isLogin: false };
}

const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
      // Xóa dữ liệu user đang đăng nhập
      deleteFromStorage("currentUser");
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
