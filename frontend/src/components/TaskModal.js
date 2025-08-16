import React from "react";

function TaskModal({ task, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 className="text-xl font-bold mb-3">{task.title}</h2>
        <p className="text-gray-700 mb-3">{task.description}</p>
        <p className="text-sm text-gray-500">Priority: {task.priority}</p>
        <p className="text-sm text-gray-500">Due: {new Date(task.dueDate).toLocaleString()}</p>
        <p className="text-sm text-gray-500">Assignee: {task.assigneeName || "Unassigned"}</p>

        {/* Comments section (static for now, will wire up later) */}
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Comments</h3>
          {task.comments?.length ? (
            <ul className="space-y-2">
              {task.comments.map((c, i) => (
                <li key={i} className="p-2 bg-gray-100 rounded">
                  {c.body}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 text-sm">No comments yet</p>
          )}
        </div>

        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default TaskModal;
