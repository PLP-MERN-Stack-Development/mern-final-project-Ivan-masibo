const express = require("express");
const router = express.Router();
const { addYield, compareYield } = require("../controllers/yieldController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, addYield);
router.get("/compare/:cropId", protect, compareYield);

module.exports = router;
