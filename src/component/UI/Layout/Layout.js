import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.content}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
