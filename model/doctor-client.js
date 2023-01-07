
const Client = require('./client');
const Doctor = require('./doctor');
const Sequelize = require('sequelize');
const db = require('../config/connection/connection-db');
const Doctor_Client = db.define('Doctor_Client', {});
Doctor.belongsToMany(Client, { through: 'Doctor_Client' });
Client.belongsToMany(Doctor, { through: 'Doctor_Client' });
// Doctor_Client.sync()
module.exports = Doctor_Client;
