const Farm = require('../models/Farm');
const Crop = require('../models/Crop');
const cloudinary = require('../config/cloudinary');

// Upload image for farm
exports.uploadFarmImage = async (req, res) => {
  try {
    const farm = await Farm.findById(req.params.farmId);
    if (!farm || farm.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    farm.images.push(req.file.path);
    await farm.save();
    res.json({ url: req.file.path });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Upload image for crop
exports.uploadCropImage = async (req, res) => {
  try {
    const crop = await Crop.findById(req.params.cropId);
    if (!crop || crop.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    crop.images.push(req.file.path);
    await crop.save();
    res.json({ url: req.file.path });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete image from farm
exports.deleteFarmImage = async (req, res) => {
  try {
    const farm = await Farm.findById(req.params.farmId);
    if (!farm || farm.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    farm.images = farm.images.filter(url => url !== req.body.url);
    await farm.save();
    // Optionally delete from Cloudinary
    res.json({ message: 'Image deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete image from crop
exports.deleteCropImage = async (req, res) => {
  try {
    const crop = await Crop.findById(req.params.cropId);
    if (!crop || crop.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    crop.images = crop.images.filter(url => url !== req.body.url);
    await crop.save();
    // Optionally delete from Cloudinary
    res.json({ message: 'Image deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get images for farm
exports.getFarmImages = async (req, res) => {
  const farm = await Farm.findById(req.params.farmId);
  if (!farm) return res.status(404).json({ message: 'Farm not found' });
  res.json(farm.images);
};

// Get images for crop
exports.getCropImages = async (req, res) => {
  const crop = await Crop.findById(req.params.cropId);
  if (!crop) return res.status(404).json({ message: 'Crop not found' });
  res.json(crop.images);
};
