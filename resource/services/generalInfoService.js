"use strict";

var models = require('../models/index');

module.exports = {

  list: function (query) {

    return new Promise(function (resolve, reject) {
      models.GeneralInfo.findAll()
      .then(function (response) {
        resolve({general_infos: response});
      })
      .catch(function (err) {
        reject(err);
      });
    });
  },

  create: function (generalInfoParam) {
    return new Promise(function (resolve, reject) {
      models.GeneralInfo.create(generalInfoParam)
      .then(function (response) {
        resolve({general_info: response});
      })
      .catch(function (err) {
        reject(err);
      });
    });
  },
};
