const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  expenseType: {
    type: String,
    enum: ["seed", "fertilizer", "labor", "pesticide", "transport"],
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  notes: String,
  farm: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Farm",
    required: true,
  },
  crop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Crop",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Expense", expenseSchema);
