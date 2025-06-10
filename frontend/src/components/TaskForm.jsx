import React, { useState } from "react";

function TaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskName || !description || !dueDate) return;

    onAddTask({
      id: Date.now(),
      name: taskName,
      description,
      dueDate,
      createdAt: new Date().toISOString().split("T")[0],
    });

    setTaskName("");
    setDescription("");
    setDueDate("");
  };

  const isFormValid = taskName && description && dueDate;

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h3 className="text-center mb-4">Agregar Tarea</h3>
        <form className="row g-3 align-items-end" onSubmit={handleSubmit}>
          <div className="col-3 d-flex flex-column">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control h-100"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>

          <div className="col-3 d-flex flex-column">
            <label className="form-label">Descripción</label>
            <input
              type="text"
              className="form-control h-100"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="col-3 d-flex flex-column">
            <label className="form-label">Fecha Límite</label>
            <input
              type="date"
              className="form-control h-100"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

          <div className="col-3 d-flex flex-column">
            <label className="form-label" style={{ visibility: "hidden" }}>
              Botón
            </label>
            <button
              type="submit"
              className={`btn w-100 h-100 ${
                isFormValid ? "btn-primary" : "btn-secondary disabled"
              }`}
              disabled={!isFormValid}
            >
              Agregar Tarea
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
