import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./component/UI/Layout/Layout";
import LoadingSpinner from "./component/UI/LoadingSpinner/LoadingSpinner";

const HomePage = React.lazy(() => import("./pages/Home/HomePage"));
const ShopPage = React.lazy(() => import("./pages/Shop/ShopPage"));
const DetailPage = React.lazy(() => import("./pages/Detail/DetailPage"));
const CartPage = React.lazy(() => import("./pages/Cart/CartPage"));
const CheckOutPage = React.lazy(() => import("./pages/CheckOut/CheckOutPage"));
const LoginPage = React.lazy(() => import("./pages/Login/LoginPage"));
const RegisterPage = React.lazy(() => import("./pages/Register/RegisterPage"));

function App() {
  return (
    <Layout classname="App">
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/detail/:productId" element={<DetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckOutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </Suspense>
    </Layout>
  );
}

export default App;
