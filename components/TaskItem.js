import React from "react";
import { Card, Button } from "react-bootstrap";

function TaskItem() {
  return (
    <Card className="mb-3 p-3 shadow-sm">
      <Card.Body>
        <Card.Title>Nombre de la tarea</Card.Title>
        <Card.Text>Descripción breve de la tarea.</Card.Text>
        <Card.Text className="text-muted">
          <strong>Fecha Límite:</strong> 31/12/2025
        </Card.Text>
        <Button variant="danger" size="sm">
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TaskItem;