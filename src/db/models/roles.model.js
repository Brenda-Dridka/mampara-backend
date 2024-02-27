const { Model, DataTypes, Sequelize } = require("sequelize");

const ROL_TABLE = "roles";

class Rol extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: ROL_TABLE,
      modelName: "Rol",
      timestamps: true,
    };
  }
}

const RolesSchema = {
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
  permisos: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "permisos",
  },
};

module.exports = { Rol, RolesSchema };
