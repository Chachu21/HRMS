const express = require("express");
const {
  createPermission,
  getAllPermissions,
  updatePermission,
  deletePermission,
  getPermissionById,
} = require("../controllers/permissonController");
const permissonRouter = express.Router();

permissonRouter.post("/", createPermission);
permissonRouter.get("/", getAllPermissions);
permissonRouter.get("/:id", getPermissionById);
permissonRouter.put("/:id", updatePermission);
permissonRouter.delete("/delete/:id", deletePermission);

module.exports = permissonRouter;
