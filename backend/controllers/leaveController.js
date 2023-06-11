const initModels = require("../models/init-models.js");
const sequelize = require("../config/database.js");
const multer = require("multer");
const models = initModels(sequelize);
const LeaveRequest = models.leave_request;

const createLeaveRequest = async (req, res) => {

  const { staff_id, department_id, reason,  } = req.body;
  const clearance = req.file
  try {
    const leaveRequest = await LeaveRequest.create({
      staff_id,
      department_id,
      reason,
      clearance: clearance ? clearance.filename : null,
    });
    res.status(200).json(leaveRequest);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "cannot create leave" });
  }
};

// Read all leave requests
const getAllLeaveRequests = async (req, res) => {
  try {
    const leaveRequests = await LeaveRequest.findAll();
    // console.log(leaveRequests);
    return res.json(leaveRequests);
  } catch (error) {
    return res.status(500).json({ error: "Failed to retrieve leave requests" });
  }
};
const getLeaveRequestStaffId = async (req, res) => {
  const staffId = req.params.id;

  console.log(staffId)
  try {
    const leaveRequests = await LeaveRequest.findAll({where:{ staff_id: staffId }});
    if (leaveRequests.length === 0) {
      return res.status(404).json({
        error: `No leave requests found for staff member with ID: ${staffId}`,
      });
    }
    return res.json(leaveRequests);
  } catch (error) {
    return res.status(500).json({
      error: `Failed to retrieve leave requests for staff member with ID: ${staffId}`,
    });
  }
};


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

const updateLeaveRequestById = async (req, res) => {


  const id = req.params.id;
  const { buttonType } = req.body;

  try {
    const leave_request = await LeaveRequest.findByPk(id);
    if (!leave_request) {
      return res.status(404).json({ error: "Leaveleave_request not found" });
    }

    let status;

    if (buttonType === "approve" && leave_request.status === "Pending") {
      status = "Approved";
    } else if (buttonType === "reject" && leave_request.status === "Pending") {
      status = "Rejected";
    } else {
      return res.status(400).json({ error: "Invalid button type" });
    }

    leave_request.status = status;
    await leave_request.save();

    return res
      .status(200)
      .json({ message: "Leaveleave_request status is successfully updated" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occurred while updating leave_request status" });
  }
};

// Update a leave request by ID
// const updateLeaveRequestById = async (req, res) => {
//   const id = req.params.id;
//   try {
//     const leaveRequest = await LeaveRequest.findByPk(id);
//     if (!leaveRequest) {
//       return res
//         .status(404)
//         .json({ error: `Leave request with ID: ${id} not found` });
//     }

//     const updatedLeaveRequest = await leaveRequest.update(req.body);
//     return res.json(updatedLeaveRequest);
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ error: `Failed to update leave request with ID: ${id}` });
//   }
// };

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

module.exports = {
  createLeaveRequest,
  getAllLeaveRequests,
  getLeaveRequestById,
  updateLeaveRequestById,
  deleteLeaveRequestById,
 getLeaveRequestStaffId,
  upload,
};
