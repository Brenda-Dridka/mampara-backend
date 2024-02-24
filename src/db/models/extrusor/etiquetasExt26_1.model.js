const { Model, DataTypes, Sequelize } = require("sequelize");

const ETIQUETASEXT26_1_TABLE = "etiquetasExt26_1";

class EtiquetaExt26_1 extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: ETIQUETASEXT26_1_TABLE,
      modelName: "EtiquetaExt26_1",
      timestamps: true,
    };
  }
}

const EtiquetaExt26_1Schema = {
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

module.exports = { EtiquetaExt26_1, EtiquetaExt26_1Schema };
