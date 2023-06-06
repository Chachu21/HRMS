const express = require("express");
const employeeRequisitionRoute = express.Router();
const {
  createEmployeeRequisition,
  getAllEmployeeRequisitions,
  updateEmployeeRequistions,
} = require("../controllers/employeeRequistionController");

// Route to create a new employee requisition
employeeRequisitionRoute.post("/", createEmployeeRequisition);

// Route to get all employee requisitions
employeeRequisitionRoute.get("/", getAllEmployeeRequisitions);

employeeRequisitionRoute.put("/:id", updateEmployeeRequistions);

module.exports = employeeRequisitionRoute;
