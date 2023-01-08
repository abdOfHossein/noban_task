const Sequelize = require("sequelize");
const db = require("../config/connection/connection-db");
const Doctor = require("./doctor");
const Client = db.define("client", {
  id: {
    allowNull: false,
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  first_name: {
    type: Sequelize.STRING,
  },
  last_name: {
    type: Sequelize.STRING,
  },
  username: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  mobile: {
    type: Sequelize.STRING,
  },
});

Client.sync();

module.exports = Client;
