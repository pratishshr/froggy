"use strict";

var express = require('express'),
router = express.Router();

router.get('/info/new', (req, res) => {
  res.render('general_info/new.jade');
});

module.exports = router;
