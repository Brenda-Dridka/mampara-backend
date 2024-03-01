const { Model, DataTypes, Sequelize } = require("sequelize");
const { Rol, RolesSchema } = require("./roles.model");

const USER_TABLE = "users";

class User extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: "User",
      timestamps: true,
    };
  }
}

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "nombre",
  },
  apellido: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "apellido",
  },
  username: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "username",
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "password",
  },
  rol_ususario: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "rol_ususario",
  },
};

module.exports = { User, UserSchema };
