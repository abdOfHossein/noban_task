const express = require('express');
const router = express.Router();
const doctor = require('./doctor/doctor');
const ticket = require('./ticket/ticket');
const client = require('./client/client');

router.use('/doctor', doctor);
router.use('/ticket', ticket);
router.use('/client', client);

module.exports = router;
