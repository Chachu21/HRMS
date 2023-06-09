const sequelize = require("../config/database.js");
const initModels = require("../models/init-models.js");
const models = initModels(sequelize);
const ApplicantList = models.applicant_list;

// Get all applicant_list records
const getAllApplicantList = async (req, res) => {
  try {
    const applicantList = await ApplicantList.findAll();
    res.json(applicantList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get a specific applicant_list record by ID
const getApplicantListById = async (req, res) => {
  const { id } = req.params;
  try {
    const applicantList = await ApplicantList.findByPk(id);
    if (applicantList) {
      res.json(applicantList);
    } else {
      res.status(404).json({ error: "Applicant List not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
// Get a specific applicant_list record by ID
const getApplicantListByDepartmentId = async (req, res) => {
  const department_id = req.params.id;
  try {
    const applicantList = await ApplicantList.findAll({
      where: { department_id: department_id },
    });
    if (applicantList) {
      res.json(applicantList);
    } else {
      res.status(404).json({ error: "Applicant List not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Create a new applicant_list record
const createApplicantList = async (req, res) => {
  console.log(req.body);
  try {
    const {
      applicant_id,
      applicant_email,
      vacancy_title,
      vacancy_id,
      department_id,
    } = req.body;

    // Check if department_id is provided
    if (!department_id) {
      return res.status(400).json({ error: "department_id is required" });
    }

    const applicantList = await ApplicantList.create({
      applicant_id,
      applicant_email,
      vacancy_title,
      vacancy_id,
      department_id,
    });

    res.json(applicantList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update an existing applicant_list record
const updateApplicantList = async (req, res) => {
  const { id } = req.params;
  const { applicant_id, applicant_email, vacancy_title, vacancy_id } = req.body;
  try {
    const applicantList = await ApplicantList.findByPk(id);
    if (applicantList) {
      applicantList.applicant_id = applicant_id;
      applicantList.applicant_email = applicant_email;
      applicantList.vacancy_title = vacancy_title;
      applicantList.vacancy_id = vacancy_id;
      await applicantList.save();
      res.json(applicantList);
    } else {
      res.status(404).json({ error: "Applicant List not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Delete an applicant_list record
const deleteApplicantList = async (req, res) => {
  const { id } = req.params;
  try {
    const applicantList = await ApplicantList.findByPk(id);
    if (applicantList) {
      await applicantList.destroy();
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: "Applicant List not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  getAllApplicantList,
  getApplicantListById,
  createApplicantList,
  updateApplicantList,
  deleteApplicantList,
  getApplicantListByDepartmentId,
};
