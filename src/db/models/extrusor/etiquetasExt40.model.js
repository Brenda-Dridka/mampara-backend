const { Model, DataTypes, Sequelize } = require("sequelize");

const ETIQUETASEXT40_TABLE = "etiquetasExt40";

class EtiquetaExt40 extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: ETIQUETASEXT40_TABLE,
      modelName: "EtiquetaExt40",
      timestamps: true,
    };
  }
}

const EtiquetaExt40Schema = {
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
  clave: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "clave",
  },
  fecha: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "fecha",
  },

  kilos: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "kilos",
  },
  polvos: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: "polvos",
  },
  estado: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "estado",
  },

  extrusor: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "extrusor",
  },
  fecha_entrega: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "fecha_entrega",
  },
};

module.exports = { EtiquetaExt40, EtiquetaExt40Schema };
