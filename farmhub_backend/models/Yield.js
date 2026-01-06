const mongoose = require("mongoose");

const yieldSchema = new mongoose.Schema({
  crop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Crop",
    required: true,
  },
  expectedYield: {
    type: Number,
    required: true,
  },
  actualYield: Number,
  unit: {
    type: String,
    enum: ["kg", "tonnes"],
    required: true,
  },
  harvestDate: {
    type: Date,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Yield", yieldSchema);
