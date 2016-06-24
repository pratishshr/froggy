'use strict';
module.exports = function (sequelize, DataTypes) {
  var Project = sequelize.define('Project', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    link: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    },
    underscored: true,
    tableName: 'projects'
  });
  return Project;
};
