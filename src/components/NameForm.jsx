import React, { useRef } from "react";
import Input from "./UI/Input";
import Modal from "./UI/Modal";

const NameForm = (props) => {
  const usernameInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(usernameInputRef.current.value);
    props.onClick();
  };
  return (
    <Modal onClick={props.onClick} title="Edit Username">
      <form onSubmit={submitHandler}>
        <Input
          ref={usernameInputRef}
          label="Your Name"
          input={{ type: "text", id: "editName" }}
        />
        <button>Submit</button>
      </form>
    </Modal>
  );
};

export default NameForm;
