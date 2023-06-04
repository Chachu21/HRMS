const express = require("express");
const {
  deleteLeaveRequestById,
  updateLeaveRequestById,
  getLeaveRequestById,
  getAllLeaveRequests,
  createLeaveRequest,
  upload,
} = require("../controllers/leaveController");
const leaveRouter = express.Router();
leaveRouter.post("/", upload.single("clearance"), createLeaveRequest);
leaveRouter.get("/", getAllLeaveRequests);
leaveRouter.get("/:id", getLeaveRequestById);
leaveRouter.put("/update", upload.single("clearance"), updateLeaveRequestById);
leaveRouter.delete("/delete/:id", deleteLeaveRequestById);
module.exports = leaveRouter;
