const express = require("express");
const { getEmployeeResult } = require("../controllers/manageEmployeeAccount");
const manageEmployeAccountRoute = express.Router();

manageEmployeAccountRoute.get("/", getEmployeeResult);

module.exports = manageEmployeAccountRoute;
