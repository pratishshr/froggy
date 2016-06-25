"use strict";

var ProjectService = require('../services/projectService');

var ProjectController = {

  index: function (request, response) {
    ProjectService.list()
    .then(function (projects) {
      response.render('projects/list.jade', projects)
    })
    .catch(function (err) {
      response.send(err.message);
    });
  },

  new: function (request, response) {
    ProjectService.list()
    .then(function () {
      response.render('projects/new.jade')
    })
    .catch(function (err) {
      response.send(err.message);
    });
  },

  create: function (request, response) {
    var projectParam = request.body;
    ProjectService.create(projectParam)
    .then(function () {
      response.redirect('/projects');
    })
    .catch(function (err) {
      response.send(err.message);
    });
  }
};

module.exports = ProjectController;
