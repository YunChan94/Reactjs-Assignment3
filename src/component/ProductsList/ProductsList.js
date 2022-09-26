import React, { useEffect, useState } from "react";
import classes from "./ProductsList.module.css";

const ProductsList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p>MADE THE HARD WAY</p>
        <h5>TOP TRENDING PRODUCTS</h5>
      </div>
      <div className={classes.productsList}>
        {data.map((item) => (
          <div className={classes.productItem}>
            <img src={item.img1} alt="" />
            <h5>{item.name}</h5>
            <p>{`${item.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
