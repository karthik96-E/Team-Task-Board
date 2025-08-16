
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Task = require('./Task');

const Comment = sequelize.define('Comment', {
  text: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// A comment belongs to a task
Comment.belongsTo(Task, { onDelete: 'CASCADE' });
Task.hasMany(Comment);

module.exports = Comment;
