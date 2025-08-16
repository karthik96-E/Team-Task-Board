import React, { useState } from "react";

function AddTask({ onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [assigneeId, setAssigneeId] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = {
      title,
      description,
      priority,
      assigneeId,
      status: "backlog", // default new task goes to backlog
      dueDate,
    };

    try {
      const res = await fetch("http://localhost:5000/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });

      if (!res.ok) {
        throw new Error("Failed to add task");
      }

      const savedTask = await res.json();

      // update UI immediately
      onTaskAdded(savedTask);

      // reset form
      setTitle("");
      setDescription("");
      setPriority("Medium");
      setAssigneeId("");
      setDueDate("");
    } catch (err) {
      alert("Error adding task: " + err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "20px",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h3>Add New Task</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <br />
      <input
        type="text"
        placeholder="Assignee ID"
        value={assigneeId}
        onChange={(e) => setAssigneeId(e.target.value)}
      />
      <br />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <br />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;
