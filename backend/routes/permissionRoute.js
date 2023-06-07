const express = require("express");
const {
  createPermission,
  getAllPermissions,
  updatePermission,
  deletePermission,
  getPermissionById,
  getPermissionByStaffId,
} = require("../controllers/permissonController");
const permissonRouter = express.Router();

permissonRouter.post("/", createPermission);
permissonRouter.get("/", getAllPermissions);
permissonRouter.get("/staff/:id",getPermissionByStaffId);

permissonRouter.get("/:id", getPermissionById);
permissonRouter.put("/:id", updatePermission);
permissonRouter.delete("/delete/:id", deletePermission);

module.exports = permissonRouter;
