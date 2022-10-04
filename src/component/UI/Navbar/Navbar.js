import React, { useEffect, useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import { loginActions } from "../../../store/login";
import { useDispatch, useSelector } from "react-redux";
import { getFromStorage } from "../../../lib/storage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartFlatbed, faUser } from "@fortawesome/free-solid-svg-icons";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const dipatch = useDispatch();
  const isLogin = useSelector((state) => state.login.isLogin);
  // Đang ở trạng thái đăng nhập
  // Lấy dữ liệu currentUser
  const currentUser = getFromStorage("currentUser")
    ? getFromStorage("currentUser")
    : null;

  // setCurrentUser(user);
  const logoutHandler = () => {
    dipatch(loginActions.logout());
    console.log("logout");
    // cập nhật lại currentUser
  };
  console.log(currentUser);
  return (
    <div className={classes.container}>
      <ul>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/"
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/shop"
          >
            Shop
          </NavLink>
        </li>
      </ul>
      <h1>BOUTIQUE</h1>
      <ul>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="/cart"
          >
            <FontAwesomeIcon icon={faCartFlatbed} className={classes.icon} />
            <span>Cart</span>
          </NavLink>
        </li>
        {!isLogin && (
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/login"
            >
              <FontAwesomeIcon icon={faUser} className={classes.icon} />
              <span>Login</span>
            </NavLink>
          </li>
        )}
        {currentUser && (
          <li>
            <FontAwesomeIcon icon={faUser} className={classes.icon} />
            <span>{currentUser.name}▼</span>
            <span onClick={logoutHandler}>(Logout)</span>
          </li>
        )}
      </ul>
    </div>
  );
};
export default Navbar;
