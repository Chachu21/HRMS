const sequelize = require("../config/database.js");
const initModels = require("../models/init-models.js");
const models = initModels(sequelize);
const EmployeeRequisition = models.employee_requisition;

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

const updateEmployeeRequistions = async (req, res) => {
  const id = req.params.id;
  const { buttonType } = req.body;
  const employee_requisition = await EmployeeRequisition.findByPk(id);
  let status;
  // Determine the status based on the button type

  if (
    buttonType === "forward" &&
    employee_requisition.status === "Pending" &&
    employee_requisition.status !== "Approved" &&
    employee_requisition.status !== "Rejected"
  ) {
    status = "Forwarded";
  } else if (
    buttonType === "approve" &&
    employee_requisition.status === "Forwarded" &&
    employee_requisition.status !== "Pending"
  ) {
    status = "Approved";
  } else if (
    buttonType === "reject" &&
    employee_requisition.status === "Forwarded" &&
    employee_requisition.status !== "Pending"
  ) {
    status = "Rejected";
  } else {
    res.status(400).json({ error: "Invalid button type" });
    return;
  }

  try {
    const employee_requisition = await EmployeeRequisition.findOne({
      where: { id },
    });

    if (!employee_requisition) {
      res.status(404).json({ error: "Job rank not found" });
      return;
    }

    employee_requisition.status = status;
    await employee_requisition.save();

    res
      .status(200)
      .json({ message: "Job rank status is successfully updated" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating job rank status" });
  }
};

//get employee requisition by staffid
const getAllEmployeeRequisitionsByStaffId = async (req, res) => {
  const id = req.params.id;
  try {
    const employeeRequisition = await EmployeeRequisition.findAll({
      where: { staff_id: id },
    });
    res.json(employeeRequisition);
  } catch (error) {
    console.log(error.message);
  }
};
//get employee requisition by staffid
const getAllEmployeeRequisitionsByStatus = async (req, res) => {
  const id = req.params.id;
  try {
    const employeeRequisition = await EmployeeRequisition.findAll({
      where: { status: id },
    });
    res.json(employeeRequisition);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  createEmployeeRequisition,
  getAllEmployeeRequisitions,
  updateEmployeeRequistions,
  getAllEmployeeRequisitionsByStaffId,
  getAllEmployeeRequisitionsByStatus,
};
