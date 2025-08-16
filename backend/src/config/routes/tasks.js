
const express = require("express");
const router = express.Router();
const db = require("../config/db"); // This is your MySQL connection

// Get all tasks
router.get("/", async (req, res) => {
  try {
    const [tasks] = await db.query("SELECT * FROM tasks");
    res.json(tasks);
  } catch (err) {
    console.error("❌ Error fetching tasks:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Add new task
router.post("/", async (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Task title is required" });
  }

  try {
    const [result] = await db.query(
      "INSERT INTO tasks (title) VALUES (?)",
      [title]
    );

    res.status(201).json({ id: result.insertId, title });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;



























// const express = require('express');
// const Task = require('../models/Task');
// const router = express.Router();

// // Get all tasks
// router.get('/', async (req, res) => {
//   const tasks = await Task.findAll();
//   res.json(tasks);
// });

// // Create task
// router.post('/', async (req, res) => {
//   const { title, status, UserId } = req.body;
//   const task = await Task.create({ title, status, UserId });
//   res.json(task);
// });

// module.exports = router;
