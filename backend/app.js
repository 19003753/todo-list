const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

let tasks = [];
let goals = [];

app.use((req, res, next) => {
  const apiKey = req.header("Authorization");
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ message: "Unauthorized: Invalid API Key" });
  }
  next();
});

app.get("/getTasks", (req, res) => {
  res.json(tasks);
});

app.get("/getGoals", (req, res) => {
  res.json(goals);
});

app.post("/addTask", (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ message: "Task is required" });
  }
  tasks.push(task);
  res.json({ message: "Task added", tasks });
});

app.post("/addGoal", (req, res) => {
  const { goal } = req.body;
  if (!goal) {
    return res.status(400).json({ message: "Goal is required" });
  }
  goals.push(goal);
  res.json({ message: "Goal added", goals });
});

app.delete("/removeTask", (req, res) => {
  const { task } = req.body;
  tasks = tasks.filter((t) => t !== task);
  res.json({ message: "Task removed", tasks });
});

app.delete("/removeGoal", (req, res) => {
  const { goal } = req.body;
  goals = goals.filter((g) => g !== goal);
  res.json({ message: "Goal removed", goals });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
