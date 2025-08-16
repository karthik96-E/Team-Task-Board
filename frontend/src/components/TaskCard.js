import React from "react";

function TaskCard({ task, onClick }) {
  const badgeColors = {
    "On Track": "bg-green-100 text-green-700",
    "At Risk": "bg-yellow-100 text-yellow-700",
    "Overdue": "bg-red-100 text-red-700",
  };

  return (
    <div
      className="p-3 bg-gray-50 rounded-lg shadow hover:bg-gray-100 cursor-pointer"
      onClick={onClick}
    >
      <h3 className="font-semibold">{task.title}</h3>
      <p className="text-sm text-gray-500">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700">
          {task.priority}
        </span>
        <span className={`text-xs px-2 py-1 rounded ${badgeColors[task.badge]}`}>
          {task.badge}
        </span>
      </div>
      <p className="text-xs text-gray-600 mt-1">👤 {task.assigneeName || "Unassigned"}</p>
    </div>
  );
}

export default TaskCard;
