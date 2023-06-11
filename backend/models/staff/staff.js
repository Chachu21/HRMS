const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "staff",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      fname: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      lname: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING(14),
        allowNull: false,
      },
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "role",
          key: "id",
        },
      },
      profile: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      department_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null, // Set a default value of null for department_id
        references: {
          model: "department",
          key: "id",
        },
      },
    },
    {
      tableName: "staff",
      hasTrigger: true,
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "role_staff",
          using: "BTREE",
          fields: [{ name: "role_id" }],
        },
        {
          name: "det",
          using: "BTREE",
          fields: [{ name: "department_id" }],
        },
      ],
    }
  );
};
