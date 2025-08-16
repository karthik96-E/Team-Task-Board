// backend/routes/taskRoutes.js
import express from "express";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

const router = express.Router();

// connect to DB
let db;
(async () => {
  db = await open({
    filename: "./database.sqlite",
    driver: sqlite3.Database
  });
  await db.exec("CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT)");
})();

// GET all tasks
router.get("/", async (req, res) => {
  const tasks = await db.all("SELECT * FROM tasks");
  res.json(tasks);
});

// POST new task
router.post("/", async (req, res) => {
  const { title } = req.body;
  const result = await db.run("INSERT INTO tasks (title) VALUES (?)", [title]);
  res.json({ id: result.lastID, title });
});

// DELETE task
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await db.run("DELETE FROM tasks WHERE id = ?", id);
  res.json({ message: "Task deleted" });
});

export default router;
