"use strict";

var HttpStatus = require('http-status-codes');

var GeneralInfoService = require('../services/generalInfoService');

var GeneralInfoController = {

  index: function (request, response) {
    GeneralInfoService.list()
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
    .then(function () {
      response.redirect('/infos');
    })
    .catch(function (err) {
      response.render('general_info/new.jade').status(err.code || HttpStatus.BAD_REQUEST);
    });
  }
};

module.exports = GeneralInfoController;
