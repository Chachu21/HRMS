const express =require("express")
const { getDepartmentById, getAllDepartments } = require("../controllers/departmentController")
const departmentRouter = express.Router()
departmentRouter.get("/:id", getDepartmentById)
departmentRouter.get("/", getAllDepartments)

module.exports = departmentRouter