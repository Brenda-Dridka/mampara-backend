const { Model, DataTypes, Sequelize } = require("sequelize");

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
  correo: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "correo",
  },
};

module.exports = { User, UserSchema };
