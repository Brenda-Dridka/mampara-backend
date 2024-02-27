const { Model, DataTypes, Sequelize } = require("sequelize");

const ETIQUETASEXT70_1_TABLE = "etiquetasExt70_1";

class EtiquetaExt70_1 extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: ETIQUETASEXT70_1_TABLE,
      modelName: "EtiquetaExt70_1",
      timestamps: true,
    };
  }
}

const EtiquetaExt70_1Schema = {
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

module.exports = { EtiquetaExt70_1, EtiquetaExt70_1Schema };
