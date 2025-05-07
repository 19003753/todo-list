import React from "react";
import { Form, Button, Card } from "react-bootstrap";

function TaskForm() {
  return (
    <Card className="mb-4 p-4 shadow-sm">
      <Form>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre de la tarea" />
        </Form.Group>

        <Form.Group controlId="formDescription" className="mb-3">
          <Form.Label>Descripción</Form.Label>
          <Form.Control type="text" placeholder="Descripción de la tarea" />
        </Form.Group>

        <Form.Group controlId="formDueDate" className="mb-3">
          <Form.Label>Fecha Límite</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <div className="d-grid">
          <Button variant="primary" size="lg">
            Añadir Meta
          </Button>
        </div>
      </Form>
    </Card>
  );
}

export default TaskForm;