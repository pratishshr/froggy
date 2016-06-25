"use strict";

var _ = require('lodash');

var models = require('../models/index');
var QueryParser = require('../helpers/queryParser');

module.exports = {

  list: function (query) {
    var parsedQuery = QueryParser.parse(models.Technology, query);

    return new Promise(function (resolve, reject) {
      parsedQuery.attributes = ['name'];
      models.Technology.findAll(parsedQuery)
      .then(function (response) {
        var technologies = _.map(response, 'dataValues');
        technologies = _.map(technologies, (value) => {
          return value.name
        });
        resolve({technologies: technologies});
      })
      .catch(function (err) {
        reject(err);
      });
    });
  },

  create: function (technologyParam) {
    return new Promise(function (resolve, reject) {
      models.Technology.create(technologyParam)
      .then(function (response) {
        resolve({technology: response});
      })
      .catch(function (err) {
        reject(err);
      });
    });
  },
};
