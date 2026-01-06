const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema(
  {
    cropName: { type: String, required: true },
    plantingDate: { type: Date },
    harvestDate: { type: Date },
    farm: { type: mongoose.Schema.Types.ObjectId, ref: "Farm" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: {
      type: String,
      enum: ["planted", "growing", "flowering", "harvesting", "harvested"],
      default: "growing"
    },
    lifecycle: {
      planted: Date,
      growing: Date,
      flowering: Date,
      harvesting: Date,
      harvested: Date
    },
    reminders: [{
      type: {
        type: String,
        enum: ["watering", "fertilization", "spraying", "harvesting"]
      },
      date: Date,
      note: String
    }],
    images: [{
      type: String // Cloudinary URLs
    }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Crop", cropSchema);
