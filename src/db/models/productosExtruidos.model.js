const { Model, DataTypes, Sequelize } = require("sequelize");

const PRODUCTOEXTRUIDO_TABLE = "productosExtruidos";

class ProductoExtruido extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCTOEXTRUIDO_TABLE,
      modelName: "ProductoExtruido",
      timestamps: true,
    };
  }
}

const ProductoExtruidoSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  clave: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "clave",
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "nombre",
  },

  extrusor: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "extrusor",
  },
  fecha_programada: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "fecha_programada",
  },
  hora_programada: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "hora_programada",
  },
  fecha_real: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "fecha_real",
  },
  hora_real: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "hora_real",
  },
  cantidad: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "cantidad",
  },
};

module.exports = { ProductoExtruido, ProductoExtruidoSchema };
