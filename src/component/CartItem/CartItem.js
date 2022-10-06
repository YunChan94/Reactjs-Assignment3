import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <Fragment>
      <table className={classes.cartItemcontainer}>
        <tr className={classes.title}>
          <th>IMAGE</th>
          <th>PRODUCT</th>
          <th>PRICE</th>
          <th>QUANLITY</th>
          <th>TOTAL</th>
          <th>REMOVE</th>
        </tr>
        {props.listCart.map((item) => (
          <tr className={classes.cartItem} id={item._id.$oid}>
            <td>
              <img src={item.img1} alt="" />
            </td>
            <td>{item.name}</td>
            <td
              style={{ color: "grey", fontStyle: "italic" }}
            >{`${item.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND`}</td>
            <td>
              <button>◀</button>
              <span>{item.amount}</span>
              <button>▶</button>
            </td>
            <td style={{ color: "grey", fontStyle: "italic" }}>{`${(
              item.price * item.amount
            ).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND`}</td>
            <td>
              <button>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  style={{ color: "grey", fontStyle: "italic" }}
                />
              </button>
            </td>
          </tr>
        ))}
      </table>
      <div className={classes.Btn}>
        <button>
          <Link to="/shop">← Continue shopping</Link>
        </button>
        <button>
          <Link to="/checkout">Proceed to checkout →</Link>
        </button>
      </div>
    </Fragment>
  );
};

export default CartItem;
