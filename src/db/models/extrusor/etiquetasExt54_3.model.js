const { Model, DataTypes, Sequelize } = require("sequelize");

const ETIQUETASEXT54_3_TABLE = "etiquetasExt54_3";

class EtiquetaExt54_3 extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: ETIQUETASEXT54_3_TABLE,
      modelName: "EtiquetaExt54_3",
      timestamps: true,
    };
  }
}

const EtiquetaExt54_3Schema = {
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

module.exports = { EtiquetaExt54_3, EtiquetaExt54_3Schema };
