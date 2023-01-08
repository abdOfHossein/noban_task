const express = require('express');
const router = express.Router();
const response = require('../../common/res/response');
const Err = require('../../common/err/err');
const Client = require('../../model/client');

router.post('/', async (req, res) => {
  try {
    const client = new Client();
    client.first_name = req.body.first_name;
    client.last_name = req.body.last_name;
    client.username = req.body.username;
    client.password = req.body.password;
    client.email = req.body.email;
    client.mobile = req.body.mobile;
    await client.save();
    return response(res, true, req.body);
  } catch (e) {
    console.log(e);
    return Err(res, 500, 'something is wrong');
  }
});

module.exports = router;
