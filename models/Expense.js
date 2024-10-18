const { DataTypes } = require('sequelize');
const sequelize = require('../database');

// Define the Expense model
const Expense = sequelize.define('Expense', {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  }
});

// Create the table if it doesn't exist
sequelize.sync();

module.exports = Expense;
