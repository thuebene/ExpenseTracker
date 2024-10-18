const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

router.post('/expenses', async (req, res) => {
    try {
    const { description, amount, date } = req.body;
    const newExpense = await Expense.create({ description, amount, date });
    res.status(201).json(newExpense); //Return the created expense
    } catch (error) {
        res.status(500).json({ message: 'Error creating expense', error });
    }
});

// 2. Read (GET) all expenses
router.get('/expenses', async (req, res) => {
    try {
      const expenses = await Expense.findAll();
      res.json(expenses);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching expenses', error });
    }
  });
  
  // 3. Update (PUT) an expense by ID
  router.put('/expenses/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { description, amount, date } = req.body;
      const expense = await Expense.findByPk(id);
  
      if (expense) {
        expense.description = description;
        expense.amount = amount;
        expense.date = date;
        await expense.save();
        res.json(expense);
      } else {
        res.status(404).json({ message: 'Expense not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating expense', error });
    }
  });
  
  // 4. Delete (DELETE) an expense by ID
  router.delete('/expenses/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const expense = await Expense.findByPk(id);
  
      if (expense) {
        await expense.destroy();
        res.json({ message: 'Expense deleted' });
      } else {
        res.status(404).json({ message: 'Expense not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error deleting expense', error });
    }
  });
  
  module.exports = router;