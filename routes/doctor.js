var express = require('express');
var router = express.Router();
const Doctor=require('../model/doctor')
const Client=require('../model/client')

router.post('/', function (req, res) {
  res.json({
    result: req.body,
  });
});

module.exports = router;
