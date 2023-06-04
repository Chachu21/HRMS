const multer = require("multer");
const initModels = require("../models/init-models.js");
const sequelize = require("../config/database.js");
const models = initModels(sequelize);
const LeaveRequest = models.leave_request;

const createLeaveRequest = async (req, res) => {
  const createLeaveRequest = async (req, res) => {
    const role_id = 3;
    try {
      const { staff_id, reason } = req.body;
      const clearance = req.file;
      console.log("clearance:", clearance);
      console.log("reason:", reason);

      if (!staff_id || !reason) {
        return res
          .status(400)
          .json({ error: "staff_id and reason are required" });
      }

      const leaveRequest = await LeaveRequest.create({
        staff_id,
        reason,
        clearance: clearance ? clearance.filename : null,
        role_id,
      });
      res.status(200).json(leaveRequest);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: "cannot create leave" });
    }
  };

  // const role_id = 3;
  // try {
  //   const { reason } = req.body;
  //   const clearance = req.file;
  //   console.log('clearacve');
  //   console.log(clearance);
  //   console.log(reason);

  //   const leaveRequest = await LeaveRequest.create({
  //     reason,
  //     clearance: clearance ? clearance.filename : null,
  //     role_id,
  //   });
  //   res.status(200).json(leaveRequest);
  // } catch (error) {
  //   console.log(error.message);
  //   res.status(500).json({ error: "cannot create leave" });
  // }
};

// Read all leave requests
const getAllLeaveRequests = async (req, res) => {
  try {
    const leaveRequests = await LeaveRequest.findAll();
    console.log(leaveRequests);
    return res.json(leaveRequests);
  } catch (error) {
    return res.status(500).json({ error: "Failed to retrieve leave requests" });
  }
};

// Read a leave request by ID
const getLeaveRequestById = async (req, res) => {
  const id = req.params.id;
  try {
    const leaveRequest = await LeaveRequest.findByPk(id);
    if (!leaveRequest) {
      return res
        .status(404)
        .json({ error: `Leave request with ID: ${id} not found` });
    }
    return res.json(leaveRequest);
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Failed to retrieve leave request with ID: ${id}` });
  }
};

// Update a leave request by ID
const updateLeaveRequestById = async (req, res) => {
  const id = req.params.id;
  try {
    const leaveRequest = await LeaveRequest.findByPk(id);
    if (!leaveRequest) {
      return res
        .status(404)
        .json({ error: `Leave request with ID: ${id} not found` });
    }

    const updatedLeaveRequest = await leaveRequest.update(req.body);
    return res.json(updatedLeaveRequest);
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Failed to update leave request with ID: ${id}` });
  }
};

// Delete a leave request by ID
const deleteLeaveRequestById = async (req, res) => {
  const id = req.params.id;
  try {
    const leaveRequest = await LeaveRequest.findByPk(id);
    if (!leaveRequest) {
      return res
        .status(404)
        .json({ error: `Leave request with ID: ${id} not found` });
    }

    await leaveRequest.destroy();
    return res.status(204).json();
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Failed to delete leave request with ID: ${id}` });
  }
};

const imgConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    const ext = file.originalname.split(".").pop();
    callback(null, `clearance-${Date.now()}.${ext}`);
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

module.exports = {
  createLeaveRequest,
  getAllLeaveRequests,
  getLeaveRequestById,
  updateLeaveRequestById,
  deleteLeaveRequestById,
  upload,
};
