const jwt = require("jsonwebtoken");
const initModels = require("../models/init-models.js");
const sequelize = require("../config/database.js");
const models = initModels(sequelize);
const User = models.user;

// Login route
const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
if (!email || !password) {
  return res.status(400).json({ message: "Invalid credentials" });
}
    // Check if user exists with the given email and password
    const user = await User.findOne({ where: { email, password } });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
// let reDirectUrl = '/'
// switch (user.role_id) {
//   case 1:
//     reDirectUrl = "/admin/dashboard"
//     break;
//   case 2:
//     reDirectUrl = "/applicant/dashboard"
//     break;
//   case 3:
//     reDirectUrl = "/employee/dashboard"
//     break;
//   case 4:
//     reDirectUrl = "/hrofficer/dashboard"
//     break;
//   case 5:
//     reDirectUrl = "/depthead/dashboard"
//     break;
//   default:
//     reDirectUrl ='/'
//     break;
// }
    // Generate JWT token
    const token = jwt.sign({ email: user.email, role_id: user.role_id , staff_id:user.staff_id}, "chachu");

    res.json({ email: user.email, role_id: user.role_id, staff_id :user.staff_id, applicant_id :user.applicant_id, token });
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

  jwt.verify(token, "chachu", (err, user) => {
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
