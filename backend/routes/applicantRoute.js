const express = require("express");
const {createApplicant, getAllApplicants, getSingleApplicant, updateApplicant, deleteApplicant } = require("../controllers/applicantController");
const applicantRouter = express.Router()
applicantRouter.post('/register', createApplicant)
applicantRouter.get('/', getAllApplicants)

applicantRouter.get("/:id", getSingleApplicant);
applicantRouter.put('/update/:id', updateApplicant)
applicantRouter.delete('/delete/:id', deleteApplicant)


module.exports =  applicantRouter