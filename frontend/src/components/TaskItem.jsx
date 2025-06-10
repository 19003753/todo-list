import React from "react";

function TaskItem({ name, description, dueDate, createdAt, onDelete, onEdit }) {
  return (
    <div className="card mb-4 shadow-sm">
      <div
        className="card-body d-flex flex-column align-items-center justify-content-between"
        style={{ height: "100%", padding: "20px" }}
      >
        {/* titulo */}
        <div className="text-center mb-3">
          <h5 className="card-title">{name}</h5>
        </div>

        {/* descripcion */}
        <div className="text-center mb-4">
          <p className="card-text">{description}</p>
        </div>

        {/* fechas y botones */}
        <div className="d-flex justify-content-between w-100 mt-auto">
          {/* lado izquierdo */}
          <div className="d-flex flex-column align-items-center w-50">
            <p className="mb-1 text-center">
              <small className="text-muted">Fecha de ingreso:</small>
            </p>
            <p className="mb-2 text-center">
              <small>{createdAt}</small>
            </p>
            <button className="btn btn-success w-75" onClick={onEdit}>
              Editar
            </button>
          </div>
          {/* lado derecho */}
          <div className="d-flex flex-column align-items-center w-50">
            <p className="mb-1 text-center">
              <small className="text-muted">Fecha límite:</small>
            </p>
            <p className="mb-2 text-center">
              <small>{dueDate || "No definida"}</small>
            </p>
            <button className="btn btn-danger w-75" onClick={onDelete}>
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
