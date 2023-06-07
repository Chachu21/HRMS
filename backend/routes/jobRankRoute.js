const express = require("express");
const {
  createJobRank,
  GetAllJobRank,
  deleteJobRank,
  updateJobRank,
  upload,
} = require("../controllers/jobRankController");
const jobRankRouter = express.Router();
jobRankRouter.post("/", upload.single('cv'), createJobRank);
jobRankRouter.put("/:id", updateJobRank);
jobRankRouter.get("/", GetAllJobRank);
jobRankRouter.delete("/delete/:id", deleteJobRank);

module.exports = jobRankRouter;
