const express= require("express");
const { getAllRoles, getSingleRole } = require("../controllers/roleController");
const roleRouter =express.Router()
roleRouter.get("/roles", getAllRoles);
roleRouter.get("/roles/:id", getSingleRole);
module.exports =roleRouter