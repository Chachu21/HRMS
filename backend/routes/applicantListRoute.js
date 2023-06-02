const express = require("express");
const { createApplicantList, getAllApplicantList, getApplicantListById, updateApplicantList, deleteApplicantList } = require("../controllers/applicantListController");
const applicantListRouter =express.Router();

applicantListRouter.post("/", createApplicantList)
applicantListRouter.get("/", getAllApplicantList)
applicantListRouter.get('/:id', getApplicantListById)
applicantListRouter.put('/update', updateApplicantList)
applicantListRouter.delete('/delete', deleteApplicantList)

module.exports= applicantListRouter