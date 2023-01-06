var express = require("express");
var router = express.Router();

router.post("/", function (req, res) {
    console.log('hereeeeeeeeeeeeeeeee');
  res.json({
    result: req.body,
  });
});


module.exports = router;
