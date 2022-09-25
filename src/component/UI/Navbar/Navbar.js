import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartFlatbed, faUser } from "@fortawesome/free-solid-svg-icons";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <ul>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to=""
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="shop"
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
            to="cart"
          >
            <FontAwesomeIcon icon={faCartFlatbed} className={classes.icon} />
            <span>Cart</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? classes.active : "")}
            to="login"
          >
            <FontAwesomeIcon icon={faUser} className={classes.icon} />
            <span>Login</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
