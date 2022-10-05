import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import classes from "./CartItem.module.css";

const CartItem = () => {
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
        <tr className={classes.cartItem}>
          <td>
            <img src="./Images/product_1.png" alt="" />
          </td>
          <td>name</td>
          <td style={{ color: "grey", fontStyle: "italic" }}>price</td>
          <td>
            <button>◀</button>
            <span>1</span>
            <button>▶</button>
          </td>
          <td style={{ color: "grey", fontStyle: "italic" }}>10.000.000</td>
          <td>
            <button>
              <FontAwesomeIcon
                icon={faTrashCan}
                style={{ color: "grey", fontStyle: "italic" }}
              />
            </button>
          </td>
        </tr>
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
