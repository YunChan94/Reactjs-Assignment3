import React from "react";

import classes from "./FooterItem.module.css";

const FooterItem = (props) => {
  return (
    <div className={classes.footer_item}>
      <h3>{props.name}</h3>
      <ul>
        {props.linkname.map((item) => (
          <li id={item}>
            <a href="#" id={item}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterItem;
