import React, { useRef, useState } from "react";
import TasksList from "../tasks/TasksList";
import Card from "../UI/Card";
import Input from "../UI/Input";
import classes from "./Main.module.css";

const DUMMY_DATA = [
  {
    id: "t1",
    todo: "Study React",
    status: "Completed",
  },
  {
    id: "t2",
    todo: "Finish Homework",
    status: "Running",
  },
  {
    id: "t3",
    todo: "Meditate",
    status: "Due",
  },
];

const Main = () => {
  const [tasksList, setTasksList] = useState(DUMMY_DATA);
  const todoRef = useRef();
  const taskListClearHandler = () => {
    const confirmation = window.confirm(
      "Are you sure you want to clear all the tasks?"
    );

    if (!confirmation) return;

    setTasksList([]);
  };
  const taskListUpdateHandler = (id) => {
    setTasksList((prevState) => {
      const existingTaskIndex = prevState.findIndex((state) => state.id === id);
      const existingTask = prevState[existingTaskIndex];
      if (existingTask) {
        const updatedTask = {
          ...existingTask,
          status: "Completed",
        };
        const updatedTasksList = [...prevState];
        updatedTasksList[existingTaskIndex] = updatedTask;
        return updatedTasksList;
      } else {
        return;
      }
    });
  };
  const formSubmithandler = (e) => {
    e.preventDefault();
    const newTask = {
      id: `todo_${Math.random() * 100}`,
      todo: todoRef.current.value,
      status: "Due",
    };

    setTasksList([...tasksList, newTask]);
    todoRef.current.value = "";
  };
  return (
    <main className={classes.main}>
      <div className={classes.form}>
        <form
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
          onSubmit={formSubmithandler}
        >
          <Input
            ref={todoRef}
            label="Todo"
            input={{
              type: "text",
              placeholder: "Todo",
            }}
          />
          <button>Add Todo</button>
        </form>
      </div>
      <div className={classes.tasks}>
        <TasksList
          onClear={taskListClearHandler}
          onUpdate={taskListUpdateHandler}
          tasks={tasksList}
        />
      </div>
    </main>
  );
};

export default Main;
