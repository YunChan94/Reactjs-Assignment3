import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import "./App.css";
import Layout from "./component/UI/Layout/Layout";
function App() {
  return (
    <Layout classname="App">
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="detail/:productId" element={<DetailPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckOutPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Routes>
      </main>
    </Layout>
  );
}

export default App;
