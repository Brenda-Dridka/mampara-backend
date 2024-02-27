const { Model, DataTypes, Sequelize } = require("sequelize");

const PERMISO_TABLE = "permisos";

class Permiso extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: PERMISO_TABLE,
      modelName: "Permiso",
      timestamps: true,
    };
  }
}
/* roles */
const PermisoSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  group: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "group",
  },
  permisos: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "permisos",
  },
  text_font: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "text_font",
  },
};

module.exports = { Permiso, PermisoSchema };
