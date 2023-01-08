const Sequelize = require("sequelize");
const db = require("../config/connection/connection-db");
const Doctor = db.define("doctor", {
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
  expertion: {
    type: Sequelize.STRING,
  },
  capacity: {
    type: Sequelize.INTEGER,
  },
});

// Doctor.sync();
module.exports = Doctor;
