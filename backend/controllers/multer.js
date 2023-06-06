const multer = require("multer");
const sequelize = require("../config/database.js");
const initModels = require("../models/init-models");
const models = initModels(sequelize);
const Staff = models.staff;
 // Assuming you have a Sequelize model for the Staff table

const imgConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    const ext = file.originalname.split(".").pop();
    callback(null, `image-${Date.now()}.${ext}`);
  },
});

// img filter
const isImage = (req, file, callback) => {
  const allowedMimeTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedMimeTypes.includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(new Error("Only JPEG, and PNG files are allowed"));
  }
};
const upload = multer({
  storage: imgConfig,
  fileFilter: isImage,
});

const updateProfile = async (req, res) => {
  const id = req.params.id;
  const image = req.file ? req.file.filename : null; // Get the uploaded image filename, or null if no file is uploaded

  try {
    const staff = await Staff.findByPk(id);
    if (!staff) {
      return res.status(404).send("Staff not found");
    }

    staff.profile = image;
    await staff.save();

    res.status(200).send("Staff's profile image updated successfully");
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("Server error: Could not update staff's profile image");
  }
};

module.exports = {
  upload,
  updateProfile,
};
