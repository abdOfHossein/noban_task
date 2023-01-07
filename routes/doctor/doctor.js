const express = require('express');
const router = express.Router();
const response = require('../../common/res/response');
const Err = require('../../common/err/err');
const Doctor = require('../../model/doctor');

router.post('/', async (req, res) => {
  try {
    const doctor = new Doctor();
    doctor.first_name = req.body.first_name;
    doctor.last_name = req.body.last_name;
    doctor.expertion = req.body.expertion;
    doctor.capacity = req.body.capacity;
    await doctor.save();
    return response(res, true, req.body);
  } catch (e) {
    console.log(e);
    throw Err(res, 500, 'something is wrong');
  }
});

module.exports = router;
