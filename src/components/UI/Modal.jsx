import React from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop}></div>;
};

const Overlay = (props) => {
  return (
    <div className={classes.overlay}>
      <div className={classes.overlay__title}>{props.title}</div>
      <div className={classes.overlay__content}>{props.children}</div>
    </div>
  );
};

const targetElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop onClick={props.onClick} />, targetElement)}
      {createPortal(
        <Overlay title={props.title}>{props.children}</Overlay>,
        targetElement
      )}
    </>
  );
};

export default Modal;
