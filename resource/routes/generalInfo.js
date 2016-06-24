"use strict";

var GeneralInfoController = require('../controllers/generalInfoController');

var express = require('express'),
router = express.Router();

router.get('/infos/', GeneralInfoController.index);
router.get('/infos/new', (req, res) => {
  res.render('general_info/new.jade');
});

router.post('/infos/', GeneralInfoController.create);

module.exports = router;
