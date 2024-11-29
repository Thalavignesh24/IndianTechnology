
const Dotenv = require('dotenv');
Dotenv.config();
const ENV = process.env;
module.exports = {
    PORT: {
        SERVER_PORT: ENV.PORT
    },
    // DB_URL: {
    //     ALERT_MONITORING_DB: env.ALERT_MONITORING,
    //     CLIENT_DB: env.CLIENT_DB,
    //     TRANSACTION_DB: env.TRANSACTION_SECONDARY_DB
    // }
};
