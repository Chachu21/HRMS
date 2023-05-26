var DataTypes = require("sequelize").DataTypes;
var _role = require("./role/role.js");
var _staff = require("./staff/staff.js");
var _user = require("./user/user.js");
var _applicant = require("./applicant/applicant.js");

function initModels(sequelize) {
  var role = _role(sequelize, DataTypes); // Move role model definition to the top
  var staff = _staff(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var applicant = _applicant(sequelize, DataTypes);

  // Define associations
  staff.belongsTo(role, { as: "role", foreignKey: "role_id" });
  role.hasMany(staff, { as: "staffs", foreignKey: "role_id" });

  user.belongsTo(applicant, { as: "applicant", foreignKey: "applicant_id" });
  applicant.hasMany(user, { as: "users", foreignKey: "applicant_id" });
  user.belongsTo(staff, { as: "staff", foreignKey: "staff_id" });
  staff.hasMany(user, { as: "users", foreignKey: "staff_id" });

  applicant.belongsTo(role, { as: "role", foreignKey: "role_id" });
  role.hasMany(applicant, { as: "applicants", foreignKey: "role_id" });

  return {
    applicant,
    staff,
    user,
    role,
  };
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
