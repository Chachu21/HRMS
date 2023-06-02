const sequelize = require("../config/database.js");
const initModels = require("../models/init-models.js");
const models = initModels(sequelize);
const EmployeeRequisition = models.employee_requisition;
const employee_requisition = require("../models/employee_requisition/employee_requisition");

// Controller function to handle creating a new employee requisition
async function createEmployeeRequisition(req, res) {
  try {
    // Extract the request body data
    const { staff_id, job_title, quantity, cgpa, qualification } = req.body;

    // Create a new employee requisition using the model
    const newEmployeeRequisition = await EmployeeRequisition.create({
      staff_id,
      job_title,
      quantity,
      cgpa,
      qualification,
    });

    // Return the newly created employee requisition as the response
    res.status(201).json(newEmployeeRequisition);
  } catch (error) {
    // Handle any errors that occur during the creation process
    console.error("Error creating employee requisition: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Controller function to get all employee requisitions
async function getAllEmployeeRequisitions(req, res) {
  try {
    // Retrieve all employee requisitions from the database
    const employeeRequisitions = await EmployeeRequisition.findAll();

    // Return the employee requisitions as the response
    res.status(200).json(employeeRequisitions);
  } catch (error) {
    // Handle any errors that occur during the retrieval process
    console.error("Error getting employee requisitions: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  createEmployeeRequisition,
  getAllEmployeeRequisitions,
};
