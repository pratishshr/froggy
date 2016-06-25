"use strict";

var models = require('../models/index');
var QueryParser = require('../helpers/queryParser');

module.exports = {

  list: function (query) {
    var parsedQuery = QueryParser.parse(models.Vacancy, query);

    return new Promise(function (resolve, reject) {
      models.Vacancy.findAll(parsedQuery)
      .then(function (response) {
        resolve({vacancies: response});
      })
      .catch(function (err) {
        reject(err);
      });
    });
  },

  create: function (vacancyParam) {
    return new Promise(function (resolve, reject) {
      models.Vacancy.create(vacancyParam)
      .then(function (response) {
        resolve({vacancy: response});
      })
      .catch(function (err) {
        reject(err);
      });
    });
  },
};
