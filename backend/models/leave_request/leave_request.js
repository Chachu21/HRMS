const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "leave_request",
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
      reason: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      clearance: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("Pending", "Approved", "Rejected"),
        allowNull: false,
        defaultValue: "Pending",
      },
    },
    {
      sequelize,
      tableName: "leave_request",
      timestamps: false,
      indexes: [
        {
          name: "staff_id",
          using: "BTREE",
          fields: [{ name: "staff_id" }],
        },
        {
          name: "dept_leave",
          using: "BTREE",
          fields: [{ name: "department_id" }],
        },
      ],
    }
  );
};
