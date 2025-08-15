const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Task = sequelize.define('Task', {
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  priority: DataTypes.ENUM('Low', 'Medium', 'High'),
  assigneeId: DataTypes.UUID,
  status: DataTypes.ENUM('Backlog', 'In Progress', 'Review', 'Done'),
  dueDate: DataTypes.DATE,
});

module.exports = Task;
