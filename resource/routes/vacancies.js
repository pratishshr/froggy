"use strict";

var VacancyController = require('../controllers/vacancyController');
var VacancyApiController = require('../apiControllers/vacancyApiController');

var express = require('express'),
router = express.Router();

router.get('/vacancies', VacancyController.index);
router.get('/vacancies/new', VacancyController.new);
router.post('/vacancies', VacancyController.create);
router.get('/api/v1/vacancies', VacancyApiController.index);

module.exports = router;
