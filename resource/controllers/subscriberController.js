"use strict";

var SubscriberService = require('../services/subscriberService');

var SubscriberController = {

  index: function (request, response) {
    SubscriberService.list()
    .then(function (subscribers) {
      response.render('subscribers/list.jade', subscribers)
    })
    .catch(function (err) {
      response.send(err.message);
    });
  }
};

module.exports = SubscriberController;
