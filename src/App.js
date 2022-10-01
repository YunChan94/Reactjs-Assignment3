import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import DetailPage from "./pages/Detail/DetailPage";
import CartPage from "./pages/Cart/CartPage";
import CheckOutPage from "./pages/CheckOut/CheckOutPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";

import "./App.css";
import Layout from "./component/UI/Layout/Layout";
function App() {
  // Lấy dữ liệu từ server
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <Layout classname="App">
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route
            path="/detail/:productId"
            element={<DetailPage data={data} />}
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    </Layout>
  );
}

export default App;
