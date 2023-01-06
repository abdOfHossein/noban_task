const Sequelize = require('sequelize');
const config = require('dotenv').config();

const username = process.env.DB_USERNAME;
const pass = process.env.DB_PASS;
const database = process.env.DB_NAME;

const db = new Sequelize(database, username, pass, {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
async function checkConnection() {
  try {
    await db.authenticate();
    console.log('Connected To Db ....');
  } catch (e) {
    console.log(`Can not Connect To Db Err ===>${e}`);
    throw e;
  }
}
checkConnection()
module.exports = db;
