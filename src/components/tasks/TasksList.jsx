import React from "react";
import Card from "../UI/Card";
import SingleTask from "./SingleTask";
import classes from "./TasksList.module.css";

const TasksList = (props) => {
  return (
    <>
      {props.tasks.length > 0 && (
        <>
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
