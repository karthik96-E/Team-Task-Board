
const express = require('express');
const Comment = require('../models/Comment');
const router = express.Router();

// Add comment
router.post('/', async (req, res) => {
  const { text, TaskId } = req.body;
  const comment = await Comment.create({ text, TaskId });
  res.json(comment);
});

// Get comments for a task
router.get('/:taskId', async (req, res) => {
  const comments = await Comment.findAll({ where: { TaskId: req.params.taskId } });
  res.json(comments);
});

module.exports = router;
