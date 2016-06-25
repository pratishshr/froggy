"use strict";

var SubscriberController = require('../controllers/subscriberController');
var SubscriberApiController = require('../apiControllers/subscriberApiController');

var express = require('express'),
router = express.Router();

router.get('/subscribers', SubscriberController.index);
router.post('/api/v1/subscribers', SubscriberApiController.create);
router.get('/api/v1/subscribers', SubscriberApiController.index);

module.exports = router;
