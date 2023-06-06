const express = require("express");
const {
  createApplicant,
  getAllApplicants,
  getSingleApplicant,
  updateApplicant,
  deleteApplicant,
  upload,
  UpdateProfile,
} = require("../controllers/applicantController");

const applicantRouter = express.Router();

applicantRouter.post("/register", upload.single("cv"), createApplicant);
applicantRouter.get("/", getAllApplicants);
applicantRouter.get("/:id", getSingleApplicant);
applicantRouter.put("/profile/:id",upload.single('cv'), UpdateProfile);
applicantRouter.put("/update/:id", upload.single("cv"), updateApplicant);
applicantRouter.delete("/delete/:id", deleteApplicant);

module.exports = applicantRouter;
