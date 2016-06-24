'use strict';
module.exports = function (sequelize, DataTypes) {
  var Vacancy = sequelize.define('Vacancy', {
    position: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    valid_until: DataTypes.DATE,
    number_of_opening: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    },
    underscored: true,
    tableName: 'vacancies'
  });
  return Vacancy;
};
