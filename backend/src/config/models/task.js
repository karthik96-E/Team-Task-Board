
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./User');

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('todo', 'in-progress', 'done'),
    defaultValue: 'todo'
  }
});

// A task belongs to a user
Task.belongsTo(User, { onDelete: 'CASCADE' });
User.hasMany(Task);

module.exports = Task;
