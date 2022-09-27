import { createSlice } from "@reduxjs/toolkit";

// Khi chưa click vào sản phẩm thì popup = false
const initialPopupState = { isPopup: false };

const popupSlice = createSlice({
  name: "popup",
  initialState: initialPopupState,
  reducers: {
    showPopup(state) {
      state.isPopup = true;
    },
    hidePopup(state) {
      state.isPopup = false;
    },
  },
});

export const popupActions = popupSlice.actions;
export default popupSlice.reducer;
