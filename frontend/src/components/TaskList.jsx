import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onDeleteTask }) {
  if (tasks.length === 0) {
    return <p className="text-center mt-4">No hay tareas todavía.</p>;
  }

  return (
    <div className="row">
      {tasks.map((task) => (
        <div className="col-md-4" key={task.id}>
          <TaskItem
            name={task.name}
            description={task.description}
            dueDate={task.dueDate}
            createdAt={task.createdAt}
            onDelete={() => onDeleteTask(task.id)}
            onEdit={() => console.log("Editar tarea:", task.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default TaskList;
