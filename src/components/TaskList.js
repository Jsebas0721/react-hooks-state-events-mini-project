import React from "react";
import Task from "./Task";

function TaskList({tasks, onHandleDeleteTask}) {

  return (
    <div className="tasks">
        {tasks.map(task =>(
        <Task key={task.text} category={task.category} text={task.text} onDeleteTask={onHandleDeleteTask}/>
        ))}
    </div>
  );
}

export default TaskList;
