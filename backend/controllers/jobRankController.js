const initModels = require("../models/init-models");
const sequelize = require("../config/database");
const job_rank = require("../models/job_rank/job_rank");
const { where } = require("sequelize");
const models = initModels(sequelize);
const JobRank = models.job_rank;
const createJobRank = async (req, res) => {
  try {
    // Check user role and perform actions accordingly
    const userRole = req.user.role; // Assuming the user role is stored in req.user.role
    const jobRankData = req.body;

    // Employee can only create new job ranks with pending status
    if (userRole === "employee") {
      jobRankData.status = "pending";
    }
    // Department head can only forward job ranks from pending to forwarded status
    else if (
      userRole === "department_head" &&
      jobRankData.status === "pending"
    ) {
      jobRankData.status = "forwarded";
    }
    // HR officer can approve job ranks that are in the forwarded status
    else if (userRole === "hr_officer" && jobRankData.status === "forwarded") {
      jobRankData.status = "approved";
    } else {
      return res.status(403).json({ error: "Unauthorized" });
    }

    const jobRank = await JobRank.create(jobRankData);
    res.status(200).json(jobRank);
  } catch (error) {
    res.status(500).json(error);
  }
};

const GetAllJobRank = async (req, res) => {
  try {
    const allJobRank = await JobRank.findAll();
    console.log(allJobRank);
    res.status(200).json(allJobRank);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteJobRank = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteJob = await JobRank.findOne({ where: { staff_id: `${id}` } });

    if (!deleteJob) {
      res.status(500).json({ error: "job_rank is not found for deleting" });
    }
    await JobRank.destroy();
    res.status(200).json({ message: "jobRank is successfuly deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createJobRank,
  GetAllJobRank,
  deleteJobRank,
};
