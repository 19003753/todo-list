import React from "react";
import { Container } from "react-bootstrap";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Mis Metas</h1>
      <TaskForm />
      <TaskList />
    </Container>
  );
}

export default App;