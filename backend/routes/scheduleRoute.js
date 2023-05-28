const express = require("express");
const {
  CreateShedule,
  getAllSchedule,
  updateShedule,
  deleteSchedule,
} = require("../controllers/scheduleController");
const scheduleRouter = express.Router();
scheduleRouter.post("/", CreateShedule);
scheduleRouter.get("/", getAllSchedule);
scheduleRouter.put("/update/:id", updateShedule);
scheduleRouter.delete("/delete/:id", deleteSchedule);

module.exports = scheduleRouter;
