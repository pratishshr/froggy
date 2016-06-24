"use strict";

var VacancyService = require('../services/vacancyService');

var VacancyController = {

  index: function (request, response) {
    VacancyService.list()
    .then(function (general_infos) {
      response.render('vacancies/list.jade', general_infos)
    })
    .catch(function (err) {
      response.send(err.message);
    });
  },

  new: function (request, response) {
    VacancyService.list()
    .then(function () {
      response.render('vacancies/new.jade')
    })
    .catch(function (err) {
      response.send(err.message);
    });
  },

  create: function (request, response) {
    var vacancyParam = request.body;
    VacancyService.create(vacancyParam)
    .then(function () {
      response.redirect('/vacancies');
    })
    .catch(function (err) {
      response.send(err.message);
    });
  }
};

module.exports = VacancyController;
