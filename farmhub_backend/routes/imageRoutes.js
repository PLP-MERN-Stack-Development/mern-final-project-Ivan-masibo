const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { protect } = require('../middleware/authMiddleware');
const imageController = require('../controllers/imageController');

// Farm image routes
router.post('/farm/:farmId', protect, upload.single('image'), imageController.uploadFarmImage);
router.delete('/farm/:farmId', protect, imageController.deleteFarmImage);
router.get('/farm/:farmId', protect, imageController.getFarmImages);

// Crop image routes
router.post('/crop/:cropId', protect, upload.single('image'), imageController.uploadCropImage);
router.delete('/crop/:cropId', protect, imageController.deleteCropImage);
router.get('/crop/:cropId', protect, imageController.getCropImages);

module.exports = router;
