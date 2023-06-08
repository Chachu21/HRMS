
const sequelize = require("../config/database.js");
const initModels = require("../models/init-models");
const models = initModels(sequelize);
const Result = models.result;
const Applicant = models.applicant;

async function getResultsByApplicantId(req, res) {
  const applicantId = req.params.id;
 

  try {
    const results = await Result.findAll({
      where: { applicant_id: applicantId },
      include: [
        {
          model: models.applicant,
          as: "applicant",
        },
      ],
    });
console.log("the results are kebede:",results);
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Get all results
async function getAllResults(req, res) {
  try {
    const results = await Result.findAll({ include: [Applicant] });
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Get a single result by ID
async function getResultById(req, res) {
  try {
    const result = await Result.findByPk(req.params.id, {
      include: [Applicant],
    });
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Result not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
// Create a new result
async function createResult(req, res) {
  const applicant_id = req.body.applicantId;
  const resultValue = req.body.result;
  const vacancyTitle = req.body.vacancyTitle;
  console.log("lllllllllllllllllllllllllllllllllllllllll");
  console.log(req.body.vacancyTitle);
  try {
    const result = await Result.create({
      applicant_id,
      result: resultValue,
      vacancy_title: vacancyTitle, // <-- Use the correct field name here
    });
    res.status(201).json(result);
  } catch (error) {
    console.log("my errorbbbbbbbbbbbbbbbbbbbbb");
    console.log("errrrrrrrrrrrr", error);
    res.status(400).json({ message: error.message });
  }
}

// Update a result by ID
async function updateResultById(req, res) {
  try {
    const result = await Result.findByPk(req.params.id);
    if (result) {
      result.applicant_id = req.body.applicantId;
      result.result = req.body.result;
      await result.save();
      res.json(result);
    } else {
      res.status(404).json({ message: "Result not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Delete a result by ID
async function deleteResultById(req, res) {
  try {
    const result = await Result.findByPk(req.params.id);
    if (result) {
      await result.destroy();
      res.json({ message: "Result deleted" });
    } else {
      res.status(404).json({ message: "Result not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getAllResults,
  getResultById,
  createResult,
  updateResultById,
  deleteResultById,
  getResultsByApplicantId,
};
