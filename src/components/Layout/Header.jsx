import React, { useState } from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className="user_name">{props.username}'s Task Manager</div>
      <button onClick={props.onClick}>Edit Username</button>
    </header>
  );
};

export default Header;
