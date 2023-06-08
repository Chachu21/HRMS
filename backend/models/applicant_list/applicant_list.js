module.exports = function (sequelize, DataTypes) {
  const ApplicantList = sequelize.define(
    "applicant_list",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      applicant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "applicant",
          key: "id",
        },
      },
      applicant_email: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      vacancy_title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      vacancy_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "vacancy",
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
    },
    {
      tableName: "applicant_list",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "applicant_listApp",
          using: "BTREE",
          fields: [{ name: "applicant_id" }],
        },
        {
          name: "vacc",
          using: "BTREE",
          fields: [{ name: "vacancy_id" }],
        },
        {
          name: "ghghfg",
          using: "BTREE",
          fields: [{ name: "department_id" }],
        },
      ],
    }
  );

  return ApplicantList;
};
