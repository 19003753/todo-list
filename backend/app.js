const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

let tasks = [];
let goals = [];

// Middleware de autenticación
app.use((req, res, next) => {
  const apiKey = req.header("Authorization");
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ message: "No autorizado: API Key inválida" });
  }
  next();
});

// GET tareas
app.get("/getTasks", (req, res) => {
  res.status(200).json(tasks);
});

// GET metas
app.get("/getGoals", (req, res) => {
  res.status(200).json(goals);
});

// POST tarea
app.post("/addTask", (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ message: "La tarea es requerida" });
  }
  tasks.push(task);
  res.status(200).json({ message: "Tarea agregada correctamente", tasks });
});

// POST meta
app.post("/addGoal", (req, res) => {
  const { goal } = req.body;
  if (!goal) {
    return res.status(400).json({ message: "La meta es requerida" });
  }
  goals.push(goal);
  res.status(200).json({ message: "Meta agregada correctamente", goals });
});

// DELETE tarea
app.delete("/removeTask", (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res
      .status(400)
      .json({ message: "Debe proporcionar la tarea a eliminar" });
  }
  tasks = tasks.filter((t) => t !== task);
  res.status(200).json({ message: "Tarea eliminada correctamente", tasks });
});

// DELETE meta
app.delete("/removeGoal", (req, res) => {
  const { goal } = req.body;
  if (!goal) {
    return res
      .status(400)
      .json({ message: "Debe proporcionar la meta a eliminar" });
  }
  goals = goals.filter((g) => g !== goal);
  res.status(200).json({ message: "Meta eliminada correctamente", goals });
});

// Puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
