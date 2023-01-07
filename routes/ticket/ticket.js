var express = require('express');
var router = express.Router();
const Doctor = require('../../model/doctor');
const Client = require('../../model/client');
const Doctor_Client = require('../../model/doctor-client');
const response = require('../../common/res/response');
const Err = require('../../common/err/err');

router.post('/', async (req, res) => {
  try {
    if (typeof req.body.id_client !== 'number')
      throw Err(res, 400, 'id is a number');
    const client = await Client.findOne({ where: { id: req.body.id_client } });
    const doctor = await Doctor.findOne({ where: { id: req.body.id_doctor } });
    if (!client) return Err(res, 400, 'client with this id does not exist');
    if (!doctor) return Err(res, 400, 'doctor with this id does not exist');
    const isExistTicket = await Doctor_Client.findOne({
      where: { doctorId: req.body.id_doctor, clientId: req.body.id_client },
    });
    if (isExistTicket)
      return Err(res, 400, 'sorry you already has get ticket form this doctor');

    const getTicket = new Doctor_Client();
    getTicket.clientId = req.body.id_client;
    getTicket.doctorId = req.body.id_doctor;
    await getTicket.save();
    return response(res, true, {
      message: 'your ticket for the doctor saved successfully',
      getTicket,
    });
  } catch (e) {
    console.log(e);
    return Err(res, 500, 'something is wrong');
  }
});

module.exports = router;
