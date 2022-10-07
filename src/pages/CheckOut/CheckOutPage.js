import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import classes from "./CheckOutPage.module.css";
const CheckOutPage = () => {
  const listCart = useSelector((state) => state.cart.listCart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Fragment>
      <div className={classes.banner}>
        <h1>CHECKOUT</h1>
        <div>
          <span>HOME / CART / </span>
          <span className={classes.checkout}>CHECKOUT</span>
        </div>
      </div>
      <h3>BILLING DETAILS</h3>
      <div className={classes.container}>
        <form className={classes.formcontrol}>
          <label>FULL NAME:</label>
          <input type="text" placeholder="Enter Your Full Name Here!" />
          <label>EMAIL:</label>
          <input type="email" placeholder="Enter Your Email Here!" />
          <label>PHONE NUMBER:</label>
          <input type="text" placeholder="Enter Your Phone Number Here!" />
          <label>ADDRESS:</label>
          <input type="text" placeholder="Enter Your Address Here!" />
          <button>Place order</button>
        </form>
        <div className={classes.order}>
          <h3>YOUR ORDER</h3>
          {listCart.map((item) => (
            <div className={classes.item}>
              <span>{item.name}</span>
              <span className={classes.price}>{`${item.price.replace(
                /\B(?=(\d{3})+(?!\d))/g,
                ","
              )} VND x ${item.amount}`}</span>
            </div>
          ))}
          <div className={classes.total}>
            <span>TOTAL</span>
            <span>{`${String(totalAmount).replace(
              /\B(?=(\d{3})+(?!\d))/g,
              ","
            )} VND`}</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default CheckOutPage;
