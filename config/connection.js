const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

// connects with the JAWS_DB that was added as an extension in the Heroku to store and retrieve the data
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    },
  );
}

module.exports = sequelize;