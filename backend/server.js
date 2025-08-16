const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection pool
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Karthi@99",  // change this
  database: "team_task_board" // change this if your DB name is different
});

// Example route
app.get("/api/tasks", async (req, res) => {
  try {
    const [tasks] = await db.query("SELECT * FROM tasks");
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

app.post("/api/tasks", async (req, res) => {
  try {
    const { title, description, priority, assigneeId, status, dueDate } = req.body;

    // Insert into DB
    const [result] = await pool.query(
  `INSERT INTO tasks (title, description, assignee_id, status, dueDate, created, updated)
   VALUES (?, ?, ?, ?, ?, NOW(), NOW())`,
  [title, description, assigneeId, status, dueDate]
);


    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (err) {
    console.error("❌ Error inserting task:", err);
    res.status(500).json({ error: "Database insert failed" });
  }
});




const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
