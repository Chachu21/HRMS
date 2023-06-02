const express = require("express");
const {
  createJobRank,
  GetAllJobRank,
  deleteJobRank,
} = require("../controllers/jobRankController");
const jobRankRouter = express.Router();

jobRankRouter.post("/", createJobRank);
jobRankRouter.get("/", GetAllJobRank);
jobRankRouter.delete("/delete/:id", deleteJobRank);

module.exports = jobRankRouter;
