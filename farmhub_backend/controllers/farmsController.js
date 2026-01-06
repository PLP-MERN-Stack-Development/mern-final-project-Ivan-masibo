const Farm = require("../models/Farm");

// @desc    Create a new farm
// @route   POST /api/farms
const createFarm = async (req, res) => {
  try {
    const farm = await Farm.create(req.body);
    res.status(201).json(farm);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get all farms
// @route   GET /api/farms
const getFarms = async (req, res) => {
  try {
    const farms = await Farm.find();
    res.json(farms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Soft delete a farm
// @route   DELETE /api/farms/:id
const deleteFarm = async (req, res) => {
  const farm = await Farm.findById(req.params.id);

  if (!farm || farm.owner.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not authorized" });
  }

  farm.isDeleted = true;
  await farm.save();
  res.json({ message: "Farm deleted (soft)" });
};

module.exports = {
  createFarm,
  getFarms,
  deleteFarm,
};
