const { Model, DataTypes, Sequelize } = require("sequelize");

const ETIQUETASEXT70_3_TABLE = "etiquetasExt70_3";

class EtiquetaExt70_3 extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: ETIQUETASEXT70_3_TABLE,
      modelName: "EtiquetaExt70_3",
      timestamps: true,
    };
  }
}

const EtiquetaExt70_3Schema = {
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
  posicion: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "posicion",
  },
};

module.exports = { EtiquetaExt70_3, EtiquetaExt70_3Schema };
