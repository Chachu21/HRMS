const sequelize = require("../config/database.js");
const initModels = require("../models/init-models.js");
const models = initModels(sequelize);
const Role = models.role;

const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();

    res.status(200).json(roles);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const getSingleRole = async (req, res) => {
  try {
    const id = req.params.id;
    const singleRole = await Role.findByPk(id);

    if (!singleRole) {
      return res.status(404).json({ error: "Role not found" });
    }

    res.json(singleRole);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllRoles,
  getSingleRole,
};
