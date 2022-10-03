import { createSlice } from "@reduxjs/toolkit";

const initialDataState = { data: [] };

// Lấy dữ liệu data sản phẩm

const productDataSlice = createSlice({
  name: "productData",
  initialState: initialDataState,
  reducers: {
    setData(state, fetchdata) {
      state.data = fetchdata;
    },
  },
});

export const productDataActions = productDataSlice.actions;
export default productDataSlice.reducer;
