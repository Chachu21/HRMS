const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "leave_request",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement:true
      },
      staff_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "staff",
          key: "id",
        },
      },
      reason: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      clearance: {
        type: DataTypes.TEXT,
        allowNull: false,
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
      ],
    }
  );
};
