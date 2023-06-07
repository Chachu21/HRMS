const express = require("express");
const {
  deleteLeaveRequestById,
  updateLeaveRequestById,
  getLeaveRequestById,
  getAllLeaveRequests,  getLeaveRequestStaffId,
  createLeaveRequest,
} = require("../controllers/leaveController");
const leaveRouter = express.Router();
leaveRouter.post("/", createLeaveRequest);
leaveRouter.get("/", getAllLeaveRequests);
leaveRouter.get("/:id", getLeaveRequestById);
leaveRouter.get("/:id", getLeaveRequestStaffId);

leaveRouter.put("/:id", updateLeaveRequestById);
leaveRouter.delete("/delete/:id", deleteLeaveRequestById);
module.exports = leaveRouter;
