"use strict";

var ProjectController = require('../controllers/projectController');
var ProjectApiController = require('../apiControllers/projectApiController');

var express = require('express'),
router = express.Router();

router.get('/projects', ProjectController.index);
router.get('/projects/new', ProjectController.new);
router.post('/projects', ProjectController.create);
router.get('/api/v1/projects', ProjectApiController.index);

module.exports = router;
