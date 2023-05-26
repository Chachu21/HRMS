const { Sequelize } = require("sequelize");
const config = require("../config/configDb.js");
const initModels = require("../models/init-models.js");

const db = config.development;
const sequelize = new Sequelize(db.database, db.username, db.password, {
  host: db.host,
  port: db.port,
  dialect: db.dialect,
  // Add any additional Sequelize options as needed
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

const models = initModels(sequelize);
const Staff = models.staff;

const createStaff = async (req, res) => {
  try {
    const { fname, lname, email, password, phone_number, role_id } = req.body;

    // Check if staff with the same email already exists
    const existingStaff = await Staff.findOne({ where: { email } });
    if (existingStaff) {
      return res
        .status(400)
        .json({ error: "Staff with the same email already exists" });
    }

    const newStaff = await Staff.create({
      fname,
      lname,
      email,
      password,
      phone_number,
      role_id,
    });

    res.status(201).json(newStaff);
  } catch (error) {
    console.error("Error creating staff:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllStaffs = async (req, res) => {
  try {
    const allStaff = await Staff.findAll();
    res.status(200).json(allStaff);
  } catch (error) {
    console.error("Error retrieving staff:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getSingleStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const staff = await Staff.findByPk(id);

    if (!staff) {
      return res.status(404).json({ error: "Staff not found" });
    }

    res.status(200).json(staff);
  } catch (error) {
    console.error("Error retrieving staff:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const { fname, lname, email, password, phone_number, role_id } = req.body;

    const staff = await Staff.findByPk(id);

    if (!staff) {
      return res.status(404).json({ error: "Staff not found" });
    }

    await staff.update({
      fname,
      lname,
      email,
      password,
      phone_number,
      role_id,
    });

    res.status(200).json(staff);
  } catch (error) {
    console.error("Error updating staff:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteStaff = async (req, res) => {
  try {
    const { id } = req.params;

    const staff = await Staff.findByPk(id);

    if (!staff) {
      return res.status(404).json({ error: "Staff not found" });
    }

    await staff.destroy();

    res.status(200).json({ message: "Staff deleted successfully" });
  } catch (error) {
    console.error("Error deleting staff:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = {
  createStaff,
  getAllStaffs,
  getSingleStaff,
  updateStaff,
  deleteStaff,
};
