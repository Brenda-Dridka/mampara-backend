/* implementacion de carga masiva
 */

const { Sequelize } = require("sequelize");
const { config } = require("../config/config");
const setupModels = require("../db/models");

import mysql2 from "mysql2";
if (options.dialect === "mysql") {
  options.dialectModule = mysql2;
}
new Sequelize(options);

const sequelize = new Sequelize(
  config.dbName,
  config.dbUser,
  config.dbPassword,
  {
    host: config.dbHost,
    dialect: "mysql",
  }
);

sequelize.sync();
setupModels(sequelize);

const models = sequelize.models;

module.exports = { sequelize, models };
