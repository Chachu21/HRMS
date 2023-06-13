const express = require("express");
const employeeRequisitionRoute = express.Router();
const {
  createEmployeeRequisition,
  getAllEmployeeRequisitionsByStatus,
  getAllEmployeeRequisitions,
  updateEmployeeRequistions,
  getAllEmployeeRequisitionsByStaffId,
} = require("../controllers/employeeRequistionController");

// Route to create a new employee requisition
employeeRequisitionRoute.post("/", createEmployeeRequisition);

// Route to get all employee requisitions
employeeRequisitionRoute.get("/status/:id", getAllEmployeeRequisitionsByStatus);
employeeRequisitionRoute.get("/staff/:id", getAllEmployeeRequisitionsByStaffId);

employeeRequisitionRoute.get("/", getAllEmployeeRequisitions);
employeeRequisitionRoute.put("/:id", updateEmployeeRequistions);

module.exports = employeeRequisitionRoute;
