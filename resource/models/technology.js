'use strict';
module.exports = function (sequelize, DataTypes) {
  var Technology = sequelize.define('Technology', {
    name: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    },
    underscored: true,
    tableName: 'technologies'
  });
  return Technology;
};
