const express = require("express");
const employeeRequisitionRoute = express.Router();
const {
  createEmployeeRequisition,
  getAllEmployeeRequisitions,
  updateEmployeeRequistions,
  getAllEmployeeRequisitionsByStaffId,
  getAllEmployeeRequisitionsByStatus,
} = require("../controllers/employeeRequistionController");

// Route to create a new employee requisition
employeeRequisitionRoute.post("/", createEmployeeRequisition);

// Route to get all employee requisitions
employeeRequisitionRoute.get("/", getAllEmployeeRequisitions);
employeeRequisitionRoute.get("status/:id", getAllEmployeeRequisitionsByStatus);

employeeRequisitionRoute.put("/:id", updateEmployeeRequistions);
employeeRequisitionRoute.get("/staff/:id", getAllEmployeeRequisitionsByStaffId);

module.exports = employeeRequisitionRoute;
