const multer = require("multer");
const sequelize = require("../config/database.js");
const initModels = require("../models/init-models");
const models = initModels(sequelize);
const Applicant = models.applicant;

const createApplicant = async (req, res) => {
  const role_id = 2;
  try {
    const { fname, lname, email, password, phone_number } = req.body;
    const cv = req.file;
    console.log("applicant controller");
    console.log(cv); // Access the uploaded CV file from req.file

    // Check if the applicant already exists
    const existingApplicant = await Applicant.findOne({ where: { email } });
    if (existingApplicant) {
      return res.status(400).json({ error: "Applicant already exists" });
    }

    // Create a new applicant
    const newApplicant = await Applicant.create({
      fname,
      lname,
      email,
      password,
      phone_number,
      cv: cv ? cv.filename : null, // Store the filename in the database
      role_id,
    });

    res.status(201).json(newApplicant);
  } catch (error) {
    console.error("Error creating applicant:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getAllApplicants = async (req, res) => {
  try {
    const applicants = await Applicant.findAll();
    res.json(applicants);
  } catch (error) {
    console.error("Error retrieving applicants:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getSingleApplicant = async (req, res) => {
  try {
    const applicantId = req.params.id;
    const applicant = await Applicant.findByPk(applicantId);
    if (!applicant) {
      return res.status(404).json({ error: "Applicant not found" });
    }
    res.json(applicant);
  } catch (error) {
    console.error("Error retrieving applicant:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateApplicant = async (req, res) => {
  try {
    const applicantId = req.params.id;
    const applicant = await Applicant.findByPk(applicantId);
    if (!applicant) {
      return res.status(404).json({ error: "Applicant not found" });
    }

    const { fname, lname, email, password, phone_number, role_id } = req.body;
    applicant.fname = fname;
    applicant.lname = lname;
    applicant.email = email;
    applicant.password = password;
    applicant.phone_number = phone_number;
    applicant.role_id = role_id;
    await applicant.save();
    res.json(applicant);
  } catch (error) {
    console.error("Error updating applicant:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteApplicant = async (req, res) => {
  try {
    const applicantId = req.params.id;
    const applicant = await Applicant.findByPk(applicantId);
    if (!applicant) {
      return res.status(404).json({ error: "Applicant not found" });
    }

    await applicant.destroy();
    res.status(204).end();
  } catch (error) {
    console.error("Error deleting applicant:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// img storage config
const imgConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    const ext = file.originalname.split(".").pop();
    callback(null, `cv-${Date.now()}.${ext}`);
  },
});

// img filter
const isImage = (req, file, callback) => {
  const allowedMimeTypes = [
    "application/pdf",
    "image/jpeg",
    "image/png",
    "image/jpg",
  ];
  if (allowedMimeTypes.includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(new Error("Only PDF, JPEG, and PNG files are allowed"));
  }
};

const upload = multer({
  storage: imgConfig,
  fileFilter: isImage,
});

const UpdateProfile = (req, res) => {
  const id = req.params.id;
  const image = req.file ? req.file.filename : null; // Get the uploaded image filename, or null if no file is uploaded
  // Assuming you have defined the 'applicant' model in Sequelize
  Applicant.update({ profile: image }, { where: { id: id } })
    .then((result) => {
      res.status(200).send("Farmer's profile image updated successfully");
    })
    .catch((error) => {
      console.error(error);
      res
        .status(500)
        .send("Server error: Could not update farmer's profile image");
    });
};

module.exports = {
  createApplicant,
  getAllApplicants,
  getSingleApplicant,
  updateApplicant,
  deleteApplicant,
  upload,
  UpdateProfile,
};
