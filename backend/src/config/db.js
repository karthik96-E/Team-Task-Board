const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Karthi@99", // your MySQL password
  database: "team_task_board", // your database name
});

module.exports = db;















// const { Sequelize } = require('sequelize');

// // Create SQLite database in a file named database.sqlite
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'database.sqlite', // file will be created in backend folder
//   logging: false
// });

// module.exports = { sequelize };
