import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./Banner.module.css";

const Banner = () => {
  const navigate = useNavigate();

  // Di chuyển đến trang /shop
  const gotoShop = () => {
    navigate("/shop");
  };
  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <p>NEW INSPIRATION 2020</p>
        <h2>20% OFF ON NEW SEASON</h2>
        <button onClick={gotoShop}>Brows collecttions</button>
      </div>
    </div>
  );
};

export default Banner;
