const express = require("express");
const {
  createPermission,
  getAllPermissions,
  updatePermission,
  deletePermission,
  getPermissionById,
  getPermissionByStaffId,
  getpermissionByDepartmentId,
} = require("../controllers/permissonController");
const permissonRouter = express.Router();

permissonRouter.post("/", createPermission);
permissonRouter.get("/", getAllPermissions);
 permissonRouter.get("/permission/:id",getPermissionByStaffId);

permissonRouter.get("/:id", getPermissionById);
//well
permissonRouter.get("/department/:id", getpermissionByDepartmentId);
permissonRouter.put("/:id", updatePermission);
permissonRouter.delete("/delete/:id", deletePermission);

module.exports = permissonRouter;
