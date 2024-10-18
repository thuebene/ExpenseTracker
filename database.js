const { Sequelize } = require('sequelize');

// Initialize Sequelize with SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './expenses.sqlite' // Location of your SQLite database file
});

module.exports = sequelize;