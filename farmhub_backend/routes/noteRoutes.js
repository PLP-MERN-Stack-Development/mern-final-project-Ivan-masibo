const express = require("express");
const Note = require("../models/Note");

const router = express.Router();

// Save note
router.post("/", async (req, res) => {
  const { userId, content } = req.body;

  try {
    const note = await Note.create({ userId, content });
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ message: "Failed to save note" });
  }
});

// Get notes for user
router.get("/:userId", async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.params.userId });
    res.json(notes);
  } catch {
    res.status(500).json({ message: "Failed to fetch notes" });
  }
});

module.exports = router;
