const express = require("express");
const app = express();
const mongoose = require("mongoose");
const remixRoutes = require("./routes/remix");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

mongoose.connect("mongodb://127.0.0.1:27017/musicapp");

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/remix", remixRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running...");
});
