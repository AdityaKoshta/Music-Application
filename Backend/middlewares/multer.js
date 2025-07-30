const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Create uploads folders if not exist
const createFolders = () => {
  const imageDir = path.join(__dirname, "../uploads/images");
  const musicDir = path.join(__dirname, "../uploads/music");

  if (!fs.existsSync(imageDir)) fs.mkdirSync(imageDir, { recursive: true });
  if (!fs.existsSync(musicDir)) fs.mkdirSync(musicDir, { recursive: true });
};

createFolders();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === "image") {
      cb(null, "uploads/images");
    } else if (file.fieldname === "music") {
      cb(null, "uploads/music");
    } else {
      cb(new Error("Invalid field name"), false);
    }
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const filename = `${Date.now()}-${file.fieldname}${ext}`;
    cb(null, filename);
  }
});

const upload = multer({ storage });

module.exports = upload;
