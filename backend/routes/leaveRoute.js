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
leaveRouter.post("/",upload.single('cv'), createLeaveRequest);
leaveRouter.get("/", getAllLeaveRequests);
leaveRouter.get("/:id", getLeaveRequestById);
leaveRouter.put("/:id", updateLeaveRequestById);
leaveRouter.delete("/delete/:id", deleteLeaveRequestById);
module.exports = leaveRouter;
