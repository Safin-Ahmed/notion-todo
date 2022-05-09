import React from "react";
import Input from "../UI/Input";
import classes from "./SingleTask.module.css";

const SingleTask = ({ task, onUpdate }) => {
  const checkBoxHandler = (e) => {
    const option = e.target.options[e.target.selectedIndex];
    console.log(option.value);
    onUpdate(task.id, option.value);
  };
  return (
    <li className={classes.single_task}>
      <div>
        {/* <input
          onChange={checkBoxHandler}
          className={classes.checkbox}
          type="checkbox"
          checked={task.status === "Completed"}
          disabled={task.status === "Completed"}
        /> */}
        <select value={task.status} onChange={checkBoxHandler}>
          <option value="Due">Due</option>
          <option value="Running">Running</option>
          <option value="Completed">Completed</option>
        </select>
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
