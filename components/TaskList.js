import React from "react";
import TaskItem from "./TaskItem";

function TaskList() {
  return (
    <div className="task-list">
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </div>
  );
}

export default TaskList;