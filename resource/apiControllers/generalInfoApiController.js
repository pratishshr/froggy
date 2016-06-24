"use strict";

var HttpStatus = require('http-status-codes')

var GeneralInfoService = require('../services/generalInfoService');

module.exports = {

  index: function (request, response) {
    GeneralInfoService.list(request.query)
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
