const { Model, DataTypes, Sequelize } = require("sequelize");

const ETIQUETASEXT54_5_TABLE = "etiquetasExt54_5";

class EtiquetaExt54_5 extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: ETIQUETASEXT54_5_TABLE,
      modelName: "EtiquetaExt54_5",
      timestamps: true,
    };
  }
}

const EtiquetaExt54_5Schema = {
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
    type: DataTypes.DATE,
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
  posicion: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "posicion",
  },
};

module.exports = { EtiquetaExt54_5, EtiquetaExt54_5Schema };
