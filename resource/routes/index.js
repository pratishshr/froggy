"use strict";

var express = require('express'),
router = express.Router();

router.get('/', (req, res) => {
  res.render('index.jade');
});

module.exports = router;
