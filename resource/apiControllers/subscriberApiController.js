"use strict";

var HttpStatus = require('http-status-codes');

var SubscriberService = require('../services/subscriberService');

module.exports = {

  index: function (request, response) {
    SubscriberService.list(request.query)
    .then(function (data) {
      response.status(HttpStatus.OK).json(data);
    })
    .catch(function (err) {
      response.status(err.code || HttpStatus.BAD_REQUEST).json({
        error: {
          message: err.message, code: err.code, type: err.type
        }
      });
    });
  },

  create: function (request, response) {
    var subscribeParam = request.body;
    SubscriberService.create(subscribeParam)
    .then(function (data) {
      response.status(HttpStatus.OK).json(data);
    })
    .catch(function (err) {
      response.status(err.code || HttpStatus.BAD_REQUEST).json({
        error: {
          message: err.message, code: err.code, type: err.type
        }
      });
    });
  }
};
