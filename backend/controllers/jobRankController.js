const initModels = require("../models/init-models")
const sequelize = require('../config/database')
const job_rank = require("../models/job_rank/job_rank")
const { where } = require("sequelize")
const models = initModels(sequelize)
const JobRank =models.job_rank
const createJobRank = async (req, res) =>{
  try {
    const jobRank = await JobRank.create(req.body)
    res.status(200).json(jobRank)
  } catch (error) {
    res.status(500).json(error)
  }

  }
  const GetAllJobRank = async (req, res) => { 
   try {
     const allJobRank = await JobRank.findAll();
     res.status(200).json(allJobRank);
   } catch (error) {
    res.status(500).json(error)
   }
   }

   const deleteJobRank = async (req, res) =>{
   const id = req.params.id
try {
  const deleteJob = await JobRank.findOne({ where: { staff_id: `${id}` } });

  if (!deleteJob) {
    res.status(500).json({ error: "job_rank is not found for deleting" });
  }
  await JobRank.destroy();
  res.status(200).json({ message: "jobRank is successfuly deleted" });
} catch (error) {
  res.status(500).json(error)
}
    }

    module.exports = {
      createJobRank,
      GetAllJobRank,
      deleteJobRank,
    }
