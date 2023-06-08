const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "job_rank",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      staff_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "staff",
          key: "id",
        },
      },
      department_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "department",
          key: "id",
        },
      },
      level: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      cv: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("Pending", "Forwarded", "Approved", "Rejected"),
        allowNull: false,
        defaultValue: "Pending",
      },
    },
    {
      sequelize,
      tableName: "job_rank",
      timestamps: false,
      indexes: [
        {
          name: "staff_id",
          using: "BTREE",
          fields: [{ name: "staff_id" }],
        },
        {
          name: "dep_job",
          using: "BTREE",
          fields: [{ name: "department_id" }],
        },
      ],
    }
  );
};
