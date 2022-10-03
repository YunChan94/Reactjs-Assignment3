import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { popupActions } from "../../store/popup";

import classes from "./TrendingProducts.module.css";
import PopupModal from "../PopupModal/PopupModal";

const TrendingProducts = (props) => {
  // Lấy dữ liệu từ server
  const [data, setData] = useState([]);

  //Lấy thông tin của product
  const [productID, setProductID] = useState(null);

  // Ẩn - hiện popup
  const dispatch = useDispatch();
  const isPopup = useSelector((state) => state.popup.isPopup);

  useEffect(() => {
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
      .then((response) => response.json())
      .then((data) => {
        // setData(data);
        setData(data);
      });
  }, []);

  const showPopupHandler = (event) => {
    dispatch(popupActions.showPopup());

    //Lấy id sản phẩm
    setProductID(event.target.id);
  };

  const hidePopupHandler = () => {
    dispatch(popupActions.hidePopup());
  };

  //Lấy dữ liệu sản phẩm cần popup
  const product = data.find((product) => product._id.$oid === productID);

  return (
    <div className={classes.container}>
      {isPopup && (
        <PopupModal
          onClose={hidePopupHandler}
          img={product.img1}
          name={product.name}
          price={product.price}
          desc={product.short_desc}
        />
      )}
      <div className={classes.header}>
        <p>MADE THE HARD WAY</p>
        <h5>TOP TRENDING PRODUCTS</h5>
      </div>
      <div className={classes.productsList}>
        {data.map((item) => (
          <div className={classes.productItem} id={item._id.$oid}>
            <img
              src={item.img1}
              alt=""
              onClick={showPopupHandler}
              id={item._id.$oid}
            />
            <h5>{item.name}</h5>
            <p>{`${item.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
