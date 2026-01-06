const Crop = require("../models/Crop");
const Farm = require("../models/Farm");

// Create crop and link to farm and user
const createCrop = async (req, res) => {
  const farm = await Farm.findById(req.body.farm);

  if (!farm || farm.owner.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not authorized" });
  }

  const crop = await Crop.create({
    ...req.body,
    farm: farm._id
  });
  res.status(201).json(crop);
};

// Get all crops
const getCrops = async (req, res) => {
  const crops = await Crop.find().populate("farm");
  res.json(crops);
};

// Get crops for a specific farm
const getCropsByFarm = async (req, res) => {
  const crops = await Crop.find({ farm: req.params.farmId }).populate("farm");
  res.json(crops);
};

module.exports = { createCrop, getCrops, getCropsByFarm };
