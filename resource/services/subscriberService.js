"use strict";

var models = require('../models/index');
var QueryParser = require('../helpers/queryParser');

module.exports = {

  list: function (query) {
    var parsedQuery = QueryParser.parse(models.Subscriber, query);

    return new Promise(function (resolve, reject) {
      models.Subscriber.findAll(parsedQuery)
      .then(function (response) {
        resolve({subscribers: response});
      })
      .catch(function (err) {
        reject(err);
      });
    });
  },

  create: function (subscriberParam) {
    return new Promise(function (resolve, reject) {
      models.Subscriber.create(subscriberParam)
      .then(function (response) {
        resolve({subscriber: response});
      })
      .catch(function (err) {
        reject(err);
      });
    });
  },
};
