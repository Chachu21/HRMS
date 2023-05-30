var DataTypes = require("sequelize").DataTypes;
var _role = require("./role/role.js");
var _staff = require("./staff/staff.js");
var _user = require("./user/user.js");
var _applicant = require("./applicant/applicant.js");
var _job_rank = require("./job_rank/job_rank");
var _leave_request = require("./leave_request/leave_request");
var _permission = require("./permission/permission");
var _schedule = require("./schedule/schedule");
var _vacancy = require("./vacancy/vacancy");
var _applicant_list = require("./applicant_list");

function initModels(sequelize) {
  var role = _role(sequelize, DataTypes); // Move role model definition to the top
  var staff = _staff(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var applicant = _applicant(sequelize, DataTypes);
  var job_rank = _job_rank(sequelize, DataTypes);
  var leave_request = _leave_request(sequelize, DataTypes);
  var permission = _permission(sequelize, DataTypes);
  var schedule = _schedule(sequelize, DataTypes);
   var vacancy = _vacancy(sequelize, DataTypes);
   var applicant_list = _applicant_list(sequelize, DataTypes);

  // Define associations
  staff.belongsTo(role, { as: "role", foreignKey: "role_id" });
  role.hasMany(staff, { as: "staffs", foreignKey: "role_id" });

  user.belongsTo(applicant, { as: "applicant", foreignKey: "applicant_id" });
  applicant.hasMany(user, { as: "users", foreignKey: "applicant_id" });
  user.belongsTo(staff, { as: "staff", foreignKey: "staff_id" });
  staff.hasMany(user, { as: "users", foreignKey: "staff_id" });

  applicant.belongsTo(role, { as: "role", foreignKey: "role_id" });
  role.hasMany(applicant, { as: "applicants", foreignKey: "role_id" });

  job_rank.belongsTo(staff, { as: "staff", foreignKey: "staff_id" });
  staff.hasMany(job_rank, { as: "job_ranks", foreignKey: "staff_id" });

   leave_request.belongsTo(staff, { as: "staff", foreignKey: "staff_id" });
   staff.hasMany(leave_request, {
     as: "leave_requests",
     foreignKey: "staff_id",
   });

    permission.belongsTo(staff, { as: "staff", foreignKey: "staff_id" });
    staff.hasMany(permission, { as: "permissions", foreignKey: "staff_id" });

  applicant_list.belongsTo(applicant, {
    as: "applicant",
    foreignKey: "applicant_id",
  });
  applicant.hasMany(applicant_list, {
    as: "applicant_lists",
    foreignKey: "applicant_id",
  });
  applicant_list.belongsTo(vacancy, {
    as: "vacancy",
    foreignKey: "vacancy_id",
  });
  vacancy.hasMany(applicant_list, {
    as: "applicant_lists",
    foreignKey: "vacancy_id",
  });

  return {
    applicant,
    staff,
    user,
    role,
    job_rank,
    leave_request,
    permission,
    schedule,
    vacancy,
    applicant_list,
  };
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
