const initModels = require("../models/init-models.js");
const sequelize = require("../config/database.js");
const models = initModels(sequelize);
const LeaveRequest = models.leave_request;

const createLeaveRequest = async (req, res) => {
  try {
    const leaveRequest = await LeaveRequest.create(req.body);
    res.status(200).json(leaveRequest);
  } catch (error) {
    res.status(500).json({ error: "cannot create leave" });
  }
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


const updateLeaveRequestById = async (req, res) => {
  const id = req.params.id;
  const { buttonType } = req.body;
  const leave_request = await LeaveRequest.findByPk(id);
  let status;
  console.log("job ranks list");
  console.log(leave_request.status);
  // Determine the status based on the button type
  if (buttonType === "approve" && leave_request.status === "Pending") {
    status = "Approved";
  } else if (
    buttonType === "reject" &&
    jobRank.status === "Pending"
  ) {
    status = "Rejected";
  } else {
    res.status(400).json({ error: "Invalid button type" });
    return;
  }

  try {
    const leaveRequest = await leave_request.findOne({ where: { id } });

    if (!leaveRequest) {
      res.status(404).json({ error: "leave request  not found" });
      return;
    }

    leaveRequest.status = status;
    await leaveRequest.save();

    res
      .status(200)
      .json({ message: "leave Request status is successfully updated" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating leaveRequest status" });
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

module.exports = {
  createLeaveRequest,
  getAllLeaveRequests,
  getLeaveRequestById,
  updateLeaveRequestById,
  deleteLeaveRequestById,
};
