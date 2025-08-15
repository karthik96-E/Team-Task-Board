const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const { sequelize } = require('./src/config/db');
const authRoutes = require('./src/routes/auth');
const taskRoutes = require('./src/routes/tasks');
const commentRoutes = require('./src/routes/comments');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);
app.use('/comments', commentRoutes);

// DB connect
sequelize.sync().then(() => {
  console.log('DB connected');
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
  });
});
