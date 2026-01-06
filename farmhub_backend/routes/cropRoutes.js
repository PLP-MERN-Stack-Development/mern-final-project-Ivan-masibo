const express = require("express");
const router = express.Router();
const { createCrop, getCrops, getCropsByFarm } = require("../controllers/cropController");
const { protect } = require("../middleware/authMiddleware");


router.route("/")
  .post(protect, createCrop)
  .get(protect, getCrops);

// Get crops for a specific farm
router.get("/farm/:farmId", protect, getCropsByFarm);

module.exports = router;
