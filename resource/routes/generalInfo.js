"use strict";

var express = require('express'),
router = express.Router();

router.get('/info/new', (req, res) => {
  res.render('index.jade');
});

module.exports = router;
