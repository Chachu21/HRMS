const express = require("express")
const { createJobRank, GetAllJobRank, deleteJobRank, updateJobRank } = require("../controllers/jobRankController")
const jobRankRouter =express.Router();
jobRankRouter.post('/', createJobRank);
jobRankRouter.put('/:id',updateJobRank)
jobRankRouter.get("/", GetAllJobRank);
jobRankRouter.delete('/delete/:id', deleteJobRank);

module.exports = jobRankRouter