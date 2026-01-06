const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { recommendCrops } = require('../controllers/aiController');

// AI crop recommendation endpoint
router.post('/recommend-crops', protect, recommendCrops);

module.exports = router;
