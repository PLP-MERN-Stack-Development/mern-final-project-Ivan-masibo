const Farm = require('../models/Farm');
const Crop = require('../models/Crop');
const Expense = require('../models/Expense');
const Yield = require('../models/Yield');
const User = require('../models/User');

// User dashboard analytics
exports.userDashboard = async (req, res) => {
  try {
    const userId = req.user._id;
    const totalFarms = await Farm.countDocuments({ owner: userId, isDeleted: false });
    const totalCrops = await Crop.countDocuments({ user: userId });
    const totalExpenses = await Expense.aggregate([
      { $match: { user: userId } },
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);
    const totalYields = await Yield.aggregate([
      { $lookup: { from: "crops", localField: "crop", foreignField: "_id", as: "cropObj" } },
      { $unwind: "$cropObj" },
      { $match: { "cropObj.user": userId } },
      { $group: { _id: null, total: { $sum: "$actualYield" } } }
    ]);
    res.json({
      totalFarms,
      totalCrops,
      totalExpenses: totalExpenses[0]?.total || 0,
      totalYields: totalYields[0]?.total || 0
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Admin analytics
exports.adminDashboard = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalFarms = await Farm.countDocuments();
    const totalCrops = await Crop.countDocuments();
    const totalExpenses = await Expense.aggregate([
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);
    const totalYields = await Yield.aggregate([
      { $group: { _id: null, total: { $sum: "$actualYield" } } }
    ]);
    res.json({
      totalUsers,
      totalFarms,
      totalCrops,
      totalExpenses: totalExpenses[0]?.total || 0,
      totalYields: totalYields[0]?.total || 0
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
