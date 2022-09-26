import React from "react";
import Banner from "../component/Banner/Banner";
import Categories from "../component/Categories/Categories";
import ProductsList from "../component/ProductsList/ProductsList";
const HomePage = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <ProductsList />
    </div>
  );
};
export default HomePage;
