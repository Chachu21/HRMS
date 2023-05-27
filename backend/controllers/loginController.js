const jwt = require("jsonwebtoken");
const { Sequelize } = require("sequelize");
const config = require("../config/configDb.js");
const initModels = require("../models/init-models.js");
const bcrypt = require("bcrypt");

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
const User = models.user;

// Login route
const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(email, password);
    // Check if user exists with the given email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    console.log(user.role_id);
    // Determine the redirect URL based on the user's role
    let redirectUrl = "/";
    switch (user.role_id) {
      case 1:
        redirectUrl = "/admin";
        break;
      case 2:
        redirectUrl = "/applicant";
        break;
      case 3:
        redirectUrl = "/employee";
        break;
      case 4:
        redirectUrl = "/HROfficer";

        break;
      case 5:
        redirectUrl = "/Deptheader";
        break;
      default:
        redirectUrl = "/";
    }

    // Generate JWT token
    const token = jwt.sign({ email: user.email, role: user.role }, "secretkey");

    res.json({ token, redirectUrl, user });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Middleware to authenticate the JWT token
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Access denied. Token missing" });
  }

  jwt.verify(token, "secretkey", (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }
    req.user = user;
    next();
  });
};

const LogoutUser = (req, res) => {
  // Clear user session or perform any logout operations
  req.user = null; // Clear the user session
  res.json({ message: "Logged out successfully" });
};

module.exports = {
  LoginUser,
  LogoutUser,
  authenticateToken,
};
