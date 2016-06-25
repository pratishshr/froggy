"use strict";

var GeneralInfoController = require('../controllers/generalInfoController');
var GeneralInfoApiController = require('../apiControllers/generalInfoApiController');

var express = require('express'),
router = express.Router();

router.get('/infos', GeneralInfoController.index);
router.get('/infos/new', (req, res) => {
  res.render('general_info/new.jade');
});

router.post('/infos', GeneralInfoController.create);
router.get('/api/v1/infos', GeneralInfoApiController.index);

module.exports = router;
