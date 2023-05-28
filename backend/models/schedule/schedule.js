const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('schedule', {
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    exam_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    exam_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    place: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'schedule',
    timestamps: false
  });
};
