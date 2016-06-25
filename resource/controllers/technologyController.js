"use strict";

var TechnologyService = require('../services/technologyService');

var TechnologyController = {

  index: function (request, response) {
    TechnologyService.list()
    .then(function (technologies) {
      response.render('technologies/list.jade', technologies)
    })
    .catch(function (err) {
      response.send(err.message);
    });
  },

  new: function (request, response) {
    TechnologyService.list()
    .then(function () {
      response.render('technologies/new.jade')
    })
    .catch(function (err) {
      response.send(err.message);
    });
  },

  create: function (request, response) {
    var technologyParam = request.body;
    TechnologyService.create(technologyParam)
    .then(function () {
      response.redirect('/technologies');
    })
    .catch(function (err) {
      response.send(err.message);
    });
  }
};

module.exports = TechnologyController;
