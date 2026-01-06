const express = require("express");
const router = express.Router();
const {
  createFarm,
  getFarms,
  deleteFarm,
} = require("../controllers/farmsController");
const { protect } = require("../middleware/authMiddleware");


router.route("/")
  .post(protect, createFarm)
  .get(protect, getFarms);

// Soft delete a farm
router.delete("/:id", protect, deleteFarm);

module.exports = router;
