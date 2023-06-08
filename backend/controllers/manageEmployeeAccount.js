const initModels = require("../models/init-models.js");
const sequelize = require("../config/database.js");
const models = initModels(sequelize);
const db = models;

const getEmployeeResult = (req, res) => {
 

  db.job_rank.belongsTo(db.staff, { foreignKey: "staff_id" });
  db.leave_request.belongsTo(db.staff, { foreignKey: "staff_id" });
  db.permission.belongsTo(db.staff, { foreignKey: "staff_id" });

  db.job_rank
    .findAll({
      attributes: ["level", "status"],
      include: {
        model: db.staff,
        attributes: [],
      },
    })
    .then((jobRanks) => {
      return db.leave_request
        .findAll({
          attributes: ["reason", "status"],
          include: {
            model: db.staff,
            attributes: [],
          },
        })
        .then((leaveRequests) => {
          return { jobRanks, leaveRequests };
        });
    })
    .then(({ jobRanks, leaveRequests }) => {
      return db.permission
        .findAll({
          attributes: ["type", "status"],
          include: {
            model: db.staff,
            attributes: [],
          },
        })
        .then((permissions) => {
          res.json({
            job_ranks: jobRanks,
            leave_requests: leaveRequests,
            permissions: permissions,
          });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    });
};

module.exports = { getEmployeeResult };
