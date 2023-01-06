const express = require('express');
const router = express.Router();
const doctor=require('./doctor')
const ticket=require('./ticket')


router.use('/doctor', doctor);
router.use('/ticket', ticket);

module.exports = router;
