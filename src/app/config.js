const dotenv = require('dotenv');

dotenv.config();

const {
  SERVER_PORT,
  APP_ROUTE_SERVICE_URL,
  APP_CLIENT_URL,
  SERVER_TITLE,
} = process.env;

module.exports = {
  SERVER_PORT,
  APP_ROUTE_SERVICE_URL,
  APP_CLIENT_URL,
  SERVER_TITLE,
};