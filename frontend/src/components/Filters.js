import React from "react";

function Filters({ filter = {}, setFilter }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <select
        value={filter.assignee || ""}
        onChange={(e) => setFilter((f) => ({ ...f, assignee: e.target.value }))}
      >
        <option value="">All Assignees</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
      </select>

      <select
        value={filter.priority || ""}
        onChange={(e) => setFilter((f) => ({ ...f, priority: e.target.value }))}
      >
        <option value="">All Priorities</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
  );
}

export default Filters;

