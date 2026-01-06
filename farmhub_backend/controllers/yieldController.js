const Yield = require("../models/Yield");
const Crop = require("../models/Crop");

// Add yield record
exports.addYield = async (req, res) => {
  try {
    const { crop, expectedYield, actualYield, unit, harvestDate } = req.body;
    const yieldRecord = await Yield.create({ crop, expectedYield, actualYield, unit, harvestDate });
    res.status(201).json(yieldRecord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Compare expected vs actual yield for a crop
exports.compareYield = async (req, res) => {
  try {
    const cropId = req.params.cropId;
    const yields = await Yield.find({ crop: cropId });
    res.json(yields);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
