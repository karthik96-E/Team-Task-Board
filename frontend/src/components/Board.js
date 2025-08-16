import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import Filters from "./Filters";
import TaskModal from "./TaskModal";
import AddTask from "./AddTask";

const columns = ["Backlog", "In Progress", "Review", "Done"];

function Board() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState({ assignee: "", priority: "" });
  const [selectedTask, setSelectedTask] = useState(null);

  // fetch tasks
  useEffect(() => {
    fetch("http://localhost:5000/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  const handleTaskAdded = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter.assignee && task.assigneeId !== filter.assignee) return false;
    if (filter.priority && task.priority !== filter.priority) return false;
    return true;
  });

  return (
    <div>
      <AddTask onTaskAdded={handleTaskAdded} />
      {/* <Filters setFilter={setFilter} /> */}
      <Filters filter={filter} setFilter={setFilter} />


      <div style={{ display: "flex", gap: "20px" }}>
        {columns.map((col) => (
          <div key={col} style={{ flex: 1, border: "1px solid gray", padding: "10px" }}>
            <h2>{col}</h2>
            {filteredTasks
              .filter((t) => t.status === col.toLowerCase().replace(" ", "-"))
              .map((task) => (
                <TaskCard key={task.id} task={task} onClick={() => setSelectedTask(task)} />
              ))}
          </div>
        ))}
      </div>

      {selectedTask && (
        <TaskModal task={selectedTask} onClose={() => setSelectedTask(null)} />
      )}
    </div>
  );
}

export default Board;





































