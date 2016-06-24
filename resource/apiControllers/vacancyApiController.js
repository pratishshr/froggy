"use strict";

var HttpStatus = require('http-status-codes')

var VacancyService = require('../services/vacancyService');

module.exports = {

  index: function (request, response) {
    VacancyService.list(request.query)
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
