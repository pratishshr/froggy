'use strict';
module.exports = function (sequelize, DataTypes) {
  var Subscriber = sequelize.define('Subscriber', {
    contact_info: {
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
    tableName: 'subscribers'
  });
  return Subscriber;
};
