"use strict";

var models = require('../models/index');
var QueryParser = require('../helpers/queryParser');

module.exports = {

  list: function (query) {
    var parsedQuery = QueryParser.parse(models.GeneralInfo, query);

    return new Promise(function (resolve, reject) {
      models.GeneralInfo.findAll(parsedQuery)
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
