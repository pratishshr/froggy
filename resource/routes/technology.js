"use strict";

var TechnologyController = require('../controllers/technologyController');
var TechnologyApiController = require('../apiControllers/technologyApiController');

var express = require('express'),
router = express.Router();

router.get('/technologies', TechnologyController.index);
router.get('/technologies/new', TechnologyController.new);
router.post('/technologies', TechnologyController.create);
router.get('/api/v1/technologies', TechnologyApiController.index);

module.exports = router;
