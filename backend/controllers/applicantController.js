const sequelize = require("../config/database.js");
const initModels = require("../models/init-models.js");
const models = initModels(sequelize);
const Applicant = models.applicant;

const createApplicant = async (req, res) => {
  const role_id = 2;
  try {
    const { fname, lname, email, password, phone_number, cv } = req.body;

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
      cv,
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

    const { fname, lname, email, password, phone_number, cv, role_id } =
      req.body;
    applicant.fname = fname;
    applicant.lname = lname;
    applicant.email = email;
    applicant.password = password;
    applicant.phone_number = phone_number;
    applicant.cv = cv;
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

module.exports = {
  createApplicant,
  getAllApplicants,
  getSingleApplicant,
  updateApplicant,
  deleteApplicant,
};
