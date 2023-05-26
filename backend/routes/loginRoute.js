const express = require("express");
const {
  authenticateToken,
  LoginUser,
  LogoutUser,
} = require("../controllers/loginController");
const loginRouter = express.Router();
loginRouter.post("/login", LoginUser);
loginRouter.post("/logout", authenticateToken, LogoutUser);

module.exports = {
  loginRouter,
};
