const mongoose = require("mongoose");

const farmSchema = new mongoose.Schema(
  {
    farmName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    cropType: {
      type: String,
      required: true,
    },
    sizeInAcres: {
      type: Number,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    images: [{
      type: String // Cloudinary URLs
    }],
    locationGPS: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point',
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        default: [0, 0],
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Farm", farmSchema);
