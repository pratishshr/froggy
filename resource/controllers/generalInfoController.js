"use strict";

var HttpStatus = require('http-status-codes');

var GeneralInfoService = require('../services/generalInfoService');

module.exports = {

  index: function (request, response) {
    GeneralInfoService.list(request.query)
    .then(function (general_infos) {
      response.render('general_info/list.jade', general_infos)
    })
    .catch(function (err) {
      response.send(err.message);
    });
  },

  create: function (request, response) {
    var generalInfoParam = request.body;
    GeneralInfoService.create(generalInfoParam)
    .then(function (data) {
      response.status(HttpStatus.OK).json(data);
    })
    .catch(function (err) {
      response.render('general_info/new.jade').status(err.code || HttpStatus.BAD_REQUEST);
    });
  }
};
