import React, { useState, useEffect } from "react";

import classes from "./ShopPage.module.css";
import CategoriesList from "../../component/CategoriesList/CategoriesList";
import ProductList from "../../component/ProductList/ProductList";

const ShopPage = () => {
  // Lấy dữ liệu từ server
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  let productByCategory;
  // Lấy dữ liệu categories
  const getCategoryHandler = (category) => {
    //Trường hợp chọn all thì sẽ hiển thị đầy đủ product
    if (category === "all") {
      productByCategory = data;
      setProducts(productByCategory);
    } else {
      // Lọc product dựa trên category
      productByCategory = data.filter((item) => item.category === category);
      setProducts(productByCategory);
    }
  };

  return (
    <div>
      <div className={classes.banner}>
        <h1>SHOP</h1>
      </div>
      <div className={classes.container}>
        <CategoriesList onCategory={getCategoryHandler} />
        <div className={classes.productRender}>
          <div className={classes.searchForm}>
            <input type="text" placeholder="Enter Search Here!" />
            <select>
              <option>Default sorting</option>
            </select>
          </div>
          <ProductList dataByCategory={products} />
          <div className={classes.changePage}>
            <div className={classes.Btn}>
              <button href="#">{`<<`}</button>
              <span>1</span>
              <button href="#">{`>>`}</button>
            </div>
            <p>Showing 1-9 of 9 results</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShopPage;
