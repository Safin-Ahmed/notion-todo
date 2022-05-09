import React from "react";
import Card from "../UI/Card";
import SingleTask from "./SingleTask";
import classes from "./TasksList.module.css";

const TasksList = (props) => {
  const availableTasks = props.tasks.filter(
    (task) => task.status !== "Completed"
  );
  return (
    <>
      {props.tasks.length === 0 && (
        <h2>
          Wow! You have no pending task today <br />
          Enjoy Your Day, {""}
          <span style={{ color: "blue" }}>{props.username}🔥</span>
        </h2>
      )}
      {props.tasks.length > 0 && (
        <>
          <h2 style={{ marginBottom: "2rem" }}>
            You have {availableTasks.length} tasks pending for today <br />
            {""}
            <span style={{ color: "blue" }}>{props.username}🔥</span>
          </h2>
          <Card>
            <ul className={classes.taskslist}>
              {props.tasks.map((task) => (
                <SingleTask
                  key={task.id}
                  onUpdate={props.onUpdate}
                  task={task}
                />
              ))}
            </ul>
          </Card>
          <button onClick={props.onClear} className={classes.clear}>
            Clear Tasks
          </button>
        </>
      )}
    </>
  );
};

export default TasksList;
