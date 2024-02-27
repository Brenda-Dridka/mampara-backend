const mysql2 = require("mysql2");

const { Sequelize } = require("sequelize");
const { config } = require("../config/config");
const setupModels = require("../db/models");

const sequelize = new Sequelize(
  config.dbName,
  config.dbUser,
  config.dbPassword,
  {
    host: config.dbHost,
    dialect: "mysql",
    dialectModule: mysql2,
  }
);

sequelize.sync();
setupModels(sequelize);

const models = sequelize.models;

module.exports = { sequelize, models };
