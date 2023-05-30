const sequelize = require("../config/database.js");
const initModels = require("../models/init-models.js");
const models = initModels(sequelize);
const Permission = models.permission;

// Create a new permission
const createPermission = async (req, res) => {
  try {
    const permission = await Permission.create(req.body);
    res.status(200).json(permission);
  } catch (error) {
    res.status(500).json({ error: "cannot create permission" });
  }
};

// Read all permissions
const getAllPermissions = async (req, res) => {
  try {
    const permissions = await Permission.findAll();
    res.status(200).json(permissions);
  } catch (error) {
    res.status(500).json({ error: "cannot fetch permission" });
  }
};

// Read a single permission by ID
const getPermissionById = async (permissionId) => {
  try {
    const permission = await Permission.findByPk(permissionId);
    if (!permission) {
      throw new Error("Permission not found");
    }
    return permission;
  } catch (error) {
    throw new Error("Failed to retrieve permission: " + error.message);
  }
};

// Update a permission
const updatePermission = async (permissionId, data) => {
  try {
    const permission = await Permission.findByPk(permissionId);
    if (!permission) {
      throw new Error("Permission not found");
    }
    await permission.update(data);
    return permission;
  } catch (error) {
    throw new Error("Failed to update permission: " + error.message);
  }
};

// Delete a permission
const deletePermission = async (permissionId) => {
  try {
    const permission = await Permission.findByPk(permissionId);
    if (!permission) {
      throw new Error("Permission not found");
    }
    await permission.destroy();
  } catch (error) {
    throw new Error("Failed to delete permission: " + error.message);
  }
};

module.exports = {
  createPermission,
  getAllPermissions,
  getPermissionById,
  updatePermission,
  deletePermission,
};
