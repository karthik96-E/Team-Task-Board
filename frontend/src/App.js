import React, { useEffect, useState } from "react";
import Board from "./components/Board";
import Filters from "./components/Filters";
import TaskModal from "./components/TaskModal";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [filters, setFilters] = useState({ assignee: "", priority: "" });

  // Fetch tasks from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  // Apply filters
  const filteredTasks = tasks.filter((task) => {
    return (
      (filters.assignee ? task.assigneeId === parseInt(filters.assignee) : true) &&
      (filters.priority ? task.priority === filters.priority : true)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">📋 Team Task Board</h1>
      <Filters filters={filters} setFilters={setFilters} />
      <Board tasks={filteredTasks} onCardClick={setSelectedTask} />
      {selectedTask && (
        <TaskModal task={selectedTask} onClose={() => setSelectedTask(null)} />
      )}
    </div>
  );
}

export default App;
