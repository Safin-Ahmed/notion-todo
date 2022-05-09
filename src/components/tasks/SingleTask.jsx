import React from "react";
import Input from "../UI/Input";
import classes from "./SingleTask.module.css";

const SingleTask = ({ task, onUpdate }) => {
  const checkBoxHandler = (e) => {
    if (e.target.checked) {
      onUpdate(task.id);
      e.target.setAttribute("disabled", "");
    }
  };
  return (
    <li className={classes.single_task}>
      <div>
        <input
          onChange={checkBoxHandler}
          className={classes.checkbox}
          type="checkbox"
          checked={task.status === "Completed"}
          disabled={task.status === "Completed"}
        />
        <h3
          className={
            task.status === "Completed" ? `${classes.line_through}` : ""
          }
        >
          {task.todo}
        </h3>
      </div>
      <span
        className={`${classes.status} ${
          task.status === "Due"
            ? classes.red
            : task.status === "Running"
            ? classes.yellow
            : task.status === "Completed"
            ? classes.green
            : ""
        }`}
      >
        {task.status}
      </span>
    </li>
  );
};

export default SingleTask;
