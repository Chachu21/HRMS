const express = require("express");
const { getAllStaffs, getSingleStaff, updateStaff, deleteStaff, createStaff } = require("../controllers/staffController");
const { upload, updateProfile } = require("../controllers/multer");
const staffRouter = express.Router();
staffRouter.post("/register", createStaff);
staffRouter.get("/", getAllStaffs);
staffRouter.get("/:id", getSingleStaff);
staffRouter.put("/profile/:id", upload.single("image"), updateProfile);
staffRouter.put("/update/:id", updateStaff);
staffRouter.delete("/delete/:id", deleteStaff);

module.exports =  {staffRouter}
