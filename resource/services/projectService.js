"use strict";

var models = require('../models/index');
var QueryParser = require('../helpers/queryParser');

module.exports = {

  list: function (query) {
    var parsedQuery = QueryParser.parse(models.Project, query);

    return new Promise(function (resolve, reject) {
      models.Project.findAll(parsedQuery)
      .then(function (response) {
        resolve({projects: response});
      })
      .catch(function (err) {
        reject(err);
      });
    });
  },

  create: function (projectParam) {
    return new Promise(function (resolve, reject) {
      models.Project.create(projectParam)
      .then(function (response) {
        resolve({project: response});
      })
      .catch(function (err) {
        reject(err);
      });
    });
  },
};
