import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart";

const CartItem = () => {
  const dispatch = useDispatch();
  const listCart = useSelector((state) => state.cart.listCart);

  const removeItemFromCartHandler = (id) => {
    // Xóa item khỏi giỏ hàng
    dispatch(cartActions.deleteCart({ id: id }));

    // Cập nhật dữ liệu
    dispatch(cartActions.updateCart());
  };

  const addItemToCartHandler = (item) => {
    // Thêm vào giỏ hàng
    dispatch(cartActions.addCart({ item: item, amount: 1 }));

    // Cập nhật dữ liệu
    dispatch(cartActions.updateCart());
  };

  const deleteItemFromCartHandler = (id) => {
    // Xóa item khỏi giỏ hàng
    dispatch(
      cartActions.deleteCart({
        id: id,
        isDelete: true,
      })
    );

    // Cập nhật dữ liệu
    dispatch(cartActions.updateCart());
  };
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
        {listCart.map((item) => (
          <tr className={classes.cartItem} id={item._id.$oid}>
            <td>
              <img src={item.img1} alt="" />
            </td>
            <td>{item.name}</td>
            <td
              style={{ color: "grey", fontStyle: "italic" }}
            >{`${item.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND`}</td>
            <td>
              <button
                onClick={removeItemFromCartHandler.bind(null, item._id.$oid)}
              >
                ◀
              </button>
              <span>{item.amount}</span>
              <button
                onClick={addItemToCartHandler.bind(null, item)}
                id={item._id.$oid}
              >
                ▶
              </button>
            </td>
            <td style={{ color: "grey", fontStyle: "italic" }}>{`${String(
              item.price * item.amount
            ).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND`}</td>
            <td>
              <button
                onClick={deleteItemFromCartHandler.bind(null, item._id.$oid)}
              >
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
