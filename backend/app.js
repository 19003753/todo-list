require("dotenv").config();

const express = require("express");
const app = express();
const connectDB = require("./database");
const Task = require("./models/Task");
const Goal = require("./models/Goal");

console.log("Conectando a MongoDB...");
connectDB();

app.use(express.json());

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
app.get("/getTasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las tareas", error });
  }
});

// GET metas
app.get("/getGoals", async (req, res) => {
  try {
    const goals = await Goal.find();
    res.status(200).json(goals);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las metas", error });
  }
});

// POST tarea
app.post("/addTask", async (req, res) => {
  const { task, deadline } = req.body;
  if (!task) {
    return res.status(400).json({ message: "La tarea es requerida" });
  }

  try {
    const newTask = new Task({ task, deadline });
    await newTask.save();
    res
      .status(200)
      .json({ message: "Tarea agregada correctamente", task: newTask });
  } catch (error) {
    console.error("Error real:", error);
    res.status(500).json({ message: "Error al guardar la tarea", error });
  }
});

// POST meta
app.post("/addGoal", async (req, res) => {
  const { goal, deadline } = req.body;
  if (!goal) {
    return res.status(400).json({ message: "La meta es requerida" });
  }

  try {
    const newGoal = new Goal({ goal, deadline });
    await newGoal.save();
    res
      .status(200)
      .json({ message: "Meta agregada correctamente", goal: newGoal });
  } catch (error) {
    console.error("Error al guardar la meta:", error);
    res.status(500).json({ message: "Error al guardar la meta", error });
  }
});

// DELETE tarea
app.delete("/removeTask", async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res
      .status(400)
      .json({ message: "Debes proporcionar el ID de la tarea a eliminar" });
  }

  try {
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    res
      .status(200)
      .json({ message: "Tarea eliminada correctamente", task: deletedTask });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la tarea", error });
  }
});

// DELETE meta
app.delete("/removeGoal", async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res
      .status(400)
      .json({ message: "Debes proporcionar el ID de la meta a eliminar" });
  }

  try {
    const deletedGoal = await Goal.findByIdAndDelete(id);
    if (!deletedGoal) {
      return res.status(404).json({ message: "Meta no encontrada" });
    }
    res
      .status(200)
      .json({ message: "Meta eliminada correctamente", goal: deletedGoal });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la meta", error });
  }
});

// Puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
