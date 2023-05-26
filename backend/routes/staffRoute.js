const express = require("express");
const { getAllStaffs, getSingleStaff, updateStaff, deleteStaff, createStaff } = require("../controllers/staffController");
const staffRouter = express.Router();
staffRouter.post("/register", createStaff);
staffRouter.get("/", getAllStaffs);
staffRouter.get("/:id", getSingleStaff);
staffRouter.put("/update/:id", updateStaff);
staffRouter.delete("/delete/:id", deleteStaff);

module.exports = {
  staffRouter,
};
