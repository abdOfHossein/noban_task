const express = require('express');
const router = express.Router();
const doctor=require('./doctor')

router.use('/doctor', doctor);

module.exports = router;
