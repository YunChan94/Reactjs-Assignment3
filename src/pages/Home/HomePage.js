import React from "react";

import AnotherInfor from "../../component/AnotherInfor/AnotherInfor";
import Banner from "../../component/Banner/Banner";
import Categories from "../../component/Categories/Categories";
import TrendingProducts from "../../component/TrendingProducts/TrendingProducts";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <TrendingProducts />
      <AnotherInfor />
    </div>
  );
};
export default HomePage;
