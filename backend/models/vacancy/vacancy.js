const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "vacancy",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      department: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      terms: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      qualification: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      sex: {
        type: DataTypes.STRING(14),
        allowNull: false,
      },
      designation: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      cgpa: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "vacancy",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
