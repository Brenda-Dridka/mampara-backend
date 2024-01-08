const { Model, DataTypes, Sequelize } = require("sequelize");

const EXTRUSORES_TABLE = "extrusores";

class Extrusor extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: EXTRUSORES_TABLE,
      modelName: "Extrusor",
      timestamps: true,
    };
  }
}

const ExtrusorSchema = {
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
};

module.exports = { Extrusor, ExtrusorSchema };
