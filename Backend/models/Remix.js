const mongoose = require("mongoose");

const remixSchema = new mongoose.Schema({
    title: String,
    artist: String,
    imageUrl: String,
    musicUrl: String,
    category: { type: String, enum: ["single", "album"], required: true },
}, {timestamps: true });

module.exports = mongoose.model("Remix", remixSchema);