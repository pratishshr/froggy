'use strict';
module.exports = function (sequelize, DataTypes) {
  var GeneralInfo = sequelize.define('GeneralInfo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function (models) {

      }
    },
    underscored: true
  });
  return GeneralInfo;
};
