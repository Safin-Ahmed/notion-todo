import React, { useState } from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className="user_name">{props.username}'s Notion</div>
      <button onClick={props.onClick}>Edit Name</button>
    </header>
  );
};

export default Header;
