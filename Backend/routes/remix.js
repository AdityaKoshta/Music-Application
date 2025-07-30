const express = require("express");
const router = express.Router();
const Remix = require("../models/Remix");
const upload = require("../middlewares/multer");

router.post("/upload", upload.fields([
  { name: "image", maxCount: 1 },
  { name: "music", maxCount: 1 }
]), async (req, res) => {
  try {
    const { title, artist, category } = req.body;
    const imageFile = req.files["image"][0];
    const musicFile = req.files["music"][0];

    const newRemix = new Remix({
      title,
      artist,
      category, // "single" or "album"
      imageUrl: `/uploads/images/${imageFile.filename}`,
      musicUrl: `/uploads/music/${musicFile.filename}`,
    });

    await newRemix.save();
    res.status(201).json({ message: "Uploaded", remix: newRemix });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

// GET all remixes
// routes/remix.js

router.get("/", async (req, res) => {
  try {
    const { category } = req.query;

    let filter = {};
    if (category) {
      filter.category = category;
    }

    const remixes = await Remix.find(filter).sort({ createdAt: -1 });
    res.json(remixes);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch remixes" });
  }
});


module.exports = router;

