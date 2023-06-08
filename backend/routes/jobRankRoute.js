const express = require("express");
const {
  createJobRank,
  GetAllJobRank,
  deleteJobRank,
  updateJobRank,
  upload,
  getJobRanktStaffId,
  getJobRankByStaffId,
} = require("../controllers/jobRankController");
const jobRankRouter = express.Router();
jobRankRouter.post("/", upload.single('cv'), createJobRank);
jobRankRouter.put("/:id", updateJobRank);
jobRankRouter.get("/job/:id", getJobRanktStaffId);
jobRankRouter.get("/", GetAllJobRank);
jobRankRouter.get("/job/:id", getJobRankByStaffId);
jobRankRouter.delete("/delete/:id", deleteJobRank);


module.exports = jobRankRouter;
