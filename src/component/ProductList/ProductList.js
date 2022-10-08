import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./ProductList.module.css";

const ProductList = (props) => {
  const navigate = useNavigate();
  //chuyển đến trang Detail
  const gotoDetail = (event) => {
    navigate(`/detail/${event.target.id}`);
  };

  return (
    <div className={classes.container}>
      <div className={classes.productsList}>
        {props.dataByCategory.map((item) => (
          <div className={classes.productItem} id={item._id.$oid}>
            <img
              src={item.img1}
              alt=""
              onClick={gotoDetail}
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

export default ProductList;
