const initModels = require("../models/init-models.js");
const sequelize = require("../config/database.js");
const models = initModels(sequelize);
const Permission = models.permission;


// Create a new permission
// const createPermission = async (req,res) => {
//   const { name, type, reason, startDate, returnDate,status ,staffId} = req.body;
//  ;
//   try {
//     const permission = await Permission.create({
//       name: name,
//       type: type,
//       reason: reason,
//       start_date: startDate,
//       return_date: returnDate,
//       status: status,
//       staff_id: staffId,

//     });
//    res.status(201).json(permission);
//   } catch (error) {
//     throw new Error("Failed to create permission: " + error.message);
//   }
// };
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
const getPermissionByStaffId = async (req,res) => {
  const staffId = req.params.id;
  try {
        const permission = await Permission.findAll({
          where: { staff_id: staffId },
        });
    if (!permission) {
      throw new Error("Permission not found");
    }
    return res.json(permission);
   
  } catch (error) {
    throw new Error("Failed to retrieve permission: " + error.message);
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
// const updatePermission = async (req, res) => {
//   // try {
//   //   const permission = await Permission.findByPk(permissionId);
//   //   if (!permission) {
//   //     throw new Error("Permission not found");
//   //   }
//   //   await permission.update(data);
//   //   return permission;
//   // } catch (error) {
//   //   throw new Error("Failed to update permission: " + error.message);
//   // }

//   const id = req.params.id;
//   const { buttonType } = req.body;
//   const permission = await Permission.findByPk(id);
//   let status;
//   console.log("job ranks list");
//   // Determine the status based on the button type
//   if (buttonType === "approve" && permission.status === "Pending") {
//     status = "Approved";
//   } else if (buttonType === "reject" && permission.status === "Pending") {
//     status = "Rejected";
//   } else {
//     res.status(400).json({ error: "Invalid button type" });
//     return;
//   }

//   try {
//     const permission = await Permission.findOne({ where: { id } });

//     if (!permission) {
//       res.status(404).json({ error: "Permission not found" });
//       return;
//     }

//     permission.status = status;
//     await permission.save();

//     res
//       .status(200)
//       .json({ message: "Permission status is successfully updated" });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ error: "An error occurred while updating permission status" });
//   }
// };

const updatePermission = async (req, res) => {
  const id = req.params.id;
  const { buttonType } = req.body;

  try {
    const permission = await Permission.findByPk(id);
    if (!permission) {
      return res.status(404).json({ error: "Permission not found" });
    }

    let status;

    if (buttonType === "approve" && permission.status === "Pending") {
      status = "Approved";
    } else if (buttonType === "reject" && permission.status === "Pending") {
      status = "Rejected";
    } else {
      return res.status(400).json({ error: "Invalid button type" });
    }

    permission.status = status;
    await permission.save();

    return res
      .status(200)
      .json({ message: "Permission status is successfully updated" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occurred while updating permission status" });
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

const getPermissionStaffId = async (req, res) => {
  const staffId = req.params.id;

  console.log(staffId);
  try {
    const permissions = await Permission.findAll({
      where: { staff_id: staffId },
    });
    if (permissions.length === 0) {
      return res.status(404).json({
        error: `Nopermission request found for staff member with ID: ${staffId}`,
      });
    }
    return res.json(permissions);
  } catch (error) {
    return res.status(500).json({
      error: `Failed to retrievepermission request for staff member with ID: ${staffId}`,
    });
  }
};

module.exports = {
  createPermission,
  getAllPermissions,
  getPermissionById,
  updatePermission,
  getPermissionByStaffId,
  deletePermission,
  getPermissionStaffId,
};
