const sequelize = require("../config/database.js");
const initModels = require("../models/init-models.js");
const models = initModels(sequelize);
const Permission = models.permission;

// Create a new permission
const createPermission = async (
  name,
  type,
  reason,
  startDate,
  returnDate,
  status,
  staffId
) => {
  try {
    const permission = await Permission.create({
      name: name,
      type: type,
      reason: reason,
      start_date: startDate,
      "return date": returnDate,
      status: status,
      staff_id: staffId,
    });
    return permission;
  } catch (error) {
    throw new Error("Failed to create permission: " + error.message);
  }
};

// Read all permissions
const getAllPermissions = async () => {
  try {
    const permissions = await Permission.findAll();
    return permissions;
  } catch (error) {
    throw new Error("Failed to retrieve permissions: " + error.message);
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
