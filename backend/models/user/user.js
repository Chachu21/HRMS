const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    staff_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'staff',
        key: 'id'
      }
    },
    applicant_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'applicant',
        key: 'id'
      }
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "staff_user",
        using: "BTREE",
        fields: [
          { name: "staff_id" },
        ]
      },
      {
        name: "applicant_user",
        using: "BTREE",
        fields: [
          { name: "applicant_id" },
        ]
      },
    ]
  });
};
