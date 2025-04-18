
const Dotenv = require('dotenv');
Dotenv.config();
const ENV = process.env;
module.exports = {
    PORT: {
        SERVER_PORT: ENV.PORT
    },
   // DB_URL: {
     //ALERT_MONITORING_DB: env.ALERT_MONITORING
   // }
};
