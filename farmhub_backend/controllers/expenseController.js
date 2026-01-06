const Expense = require("../models/Expense");
const Crop = require("../models/Crop");
const Farm = require("../models/Farm");

// Add expense to crop
exports.addExpense = async (req, res) => {
  try {
    const { crop: cropId, farm: farmId, ...rest } = req.body;
    // Ownership check can be added here
    const expense = await Expense.create({
      ...rest,
      crop: cropId,
      farm: farmId,
      user: req.user._id,
    });
    res.status(201).json(expense);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get total expenses per crop
exports.getExpensesByCrop = async (req, res) => {
  try {
    const cropId = req.params.cropId;
    const expenses = await Expense.find({ crop: cropId });
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);
    res.json({ total, expenses });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get total expenses per farm
exports.getExpensesByFarm = async (req, res) => {
  try {
    const farmId = req.params.farmId;
    const expenses = await Expense.find({ farm: farmId });
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);
    res.json({ total, expenses });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
