const initModels = require("../models/init-models");
const sequelize = require("../config/database");
const multer = require("multer");
const models = initModels(sequelize);
const JobRank = models.job_rank;
const createJobRank = async (req, res) => {
  const { staff_id, department_id, level, status } = req.body;
  try {
    console.log(department_id);
    const cv = req.file;
    const jobRank = await JobRank.create({
      staff_id,
      department_id,
      level,
      cv: cv ? cv.filename : null,
      status, // Store the filename in the database
    });
    res.status(200).json(jobRank);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
const GetAllJobRank = async (req, res) => {
  try {
    const allJobRank = await JobRank.findAll();

    res.status(200).json(allJobRank);
  } catch (error) {
    res.status(500).json(error);
  }
};

//get by staff id
const getJobRankByStaffId = async (req, res) => {
  const staffId = req.params.id;
  try {
    const jobRank = await JobRank.findAll({
      where: { staff_id: staffId },
    });
    if (!jobRank) {
      res.status(404).json({ error: "Job rank not found" });
      return res.json(jobRank);
    }
    res.status(200).json(jobRank);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching job rank by ID" });
  }
};
const getJobRankByDepartmentId = async (req, res) => {
  const staffId = req.params.id;
  try {
    const jobRank = await JobRank.findAll({
      where: { department_id: staffId },
    });
    if (!jobRank) {
      res.status(404).json({ error: "Job rank not found" });
      return res.json(jobRank);
    }
    res.status(200).json(jobRank);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching job rank by ID" });
  }
};

const getJobRankById = async (req, res) => {
  const id = req.params.id;
  try {
    const jobRank = await JobRank.findByPk(id);
    if (!jobRank) {
      res.status(404).json({ error: "Job rank not found" });
      return;
    }
    res.status(200).json(jobRank);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching job rank by ID" });
  }
};

const updateJobRank = async (req, res) => {
  const id = req.params.id;
  const { buttonType } = req.body;
  const jobRank = await JobRank.findByPk(id);
  let status;

  // Determine the status based on the button type

  if (
    buttonType === "forward" &&
    jobRank.status === "Pending" &&
    jobRank.status !== "Approved" &&
    jobRank.status !== "Rejected"
  ) {
    status = "Forwarded";
  } else if (
    buttonType === "approve" &&
    jobRank.status === "Forwarded" &&
    jobRank.status !== "Pending"
  ) {
    status = "Approved";
  } else if (
    buttonType === "reject" &&
    jobRank.status === "Forwarded" &&
    jobRank.status !== "Pending"
  ) {
    status = "Rejected";
  } else {
    res.status(400).json({ error: "Invalid button type" });
    return;
  }

  try {
    const jobRank = await JobRank.findOne({ where: { id } });

    if (!jobRank) {
      res.status(404).json({ error: "Job rank not found" });
      return;
    }

    jobRank.status = status;
    await jobRank.save();

    res
      .status(200)
      .json({ message: "Job rank status is successfully updated" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating job rank status" });
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

// img storage config
const imgConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    const ext = file.originalname.split(".").pop();
    callback(null, `cv-${Date.now()}.${ext}`);
  },
});

// img filter
const isImage = (req, file, callback) => {
  const allowedMimeTypes = [
    "application/pdf",
    "image/jpeg",
    "image/png",
    "image/jpg",
  ];
  if (allowedMimeTypes.includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(new Error("Only PDF, JPEG, and PNG files are allowed"));
  }
};

const upload = multer({
  storage: imgConfig,
  fileFilter: isImage,
});

const getJobRanktStaffId = async (req, res) => {
  const staffId = req.params.id;
  try {
    const jobRanks = await JobRank.findAll({ where: { staff_id: staffId } });
    if (jobRanks.length === 0) {
      return res.status(404).json({
        error: `No job rank request found for staff member with ID: ${staffId}`,
      });
    }
    return res.json(jobRanks);
  } catch (error) {
    return res.status(500).json({
      error: `Failed to retrieve job rank request for staff member with ID: ${staffId}`,
    });
  }
};

module.exports = {
  createJobRank,
  GetAllJobRank,
  getJobRankById,
  updateJobRank,
  deleteJobRank,
  getJobRankByStaffId,
  upload,
  getJobRanktStaffId,
  getJobRankByDepartmentId,
};
