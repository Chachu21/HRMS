const sequelize = require("../config/database.js");
const initModels = require("../models/init-models.js");
const models = initModels(sequelize);
const Department = models.department;
// Create a department
const createDepartment = async (req, res) => {
  try {
    const { name } = req.body;
    const department = await Department.create({ name });
    res.status(201).json(department);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read all departments
const getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.findAll();
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read a department by ID
const getDepartmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await Department.findByPk(id);

    if (!department) {
      return res.status(404).json({ error: "Department not found" });
    }

    res.status(200).json(department);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a department
const updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const department = await Department.findByPk(id);

    if (!department) {
      return res.status(404).json({ error: "Department not found" });
    }

    department.name = name;
    await department.save();

    res.status(200).json(department);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a department
const deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await Department.findByPk(id);

    if (!department) {
      return res.status(404).json({ error: "Department not found" });
    }

    await department.destroy();

    res.status(200).json({ message: "Department deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createDepartment,
  getAllDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
};
