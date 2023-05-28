const express = require("express")
const { createVacancy, getAllVacancies, getVacancyById, updateVacancy, deleteVacancy } = require("../controllers/vacancyController")
const vacancyRouter = express.Router()

vacancyRouter.post("/", createVacancy)
vacancyRouter.get("/", getAllVacancies)
vacancyRouter.get("/:id", getVacancyById);
vacancyRouter.put("/update/:id", updateVacancy);
vacancyRouter.delete("/delete/:id", deleteVacancy);

module.exports = vacancyRouter