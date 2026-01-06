const express = require("express");
const router = express.Router();
const { addExpense, getExpensesByCrop, getExpensesByFarm } = require("../controllers/expenseController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, addExpense);
router.get("/crop/:cropId", protect, getExpensesByCrop);
router.get("/farm/:farmId", protect, getExpensesByFarm);

module.exports = router;
