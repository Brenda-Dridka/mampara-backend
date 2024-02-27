const { Model, DataTypes, Sequelize } = require("sequelize");

const PRODUCTO_TABLE = "productos";

class Producto extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCTO_TABLE,
      modelName: "Producto",
      timestamps: true,
    };
  }
}

const ProductoSchema = {
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
  l: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "l",
  },
  a: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "a",
  },
  b: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "b",
  },
  r: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "r",
  },
  g: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "g",
  },
  b_: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "b_",
  },
};

module.exports = { Producto, ProductoSchema };
