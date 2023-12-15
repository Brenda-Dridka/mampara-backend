const { Model, DataTypes, Sequelize } = require("sequelize");

const ETIQUETASEXT26_2_TABLE = "EtiquetasExt26_2";

class EtiquetaExt26_2 extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: ETIQUETASEXT26_2_TABLE,
      modelName: "EtiquetaExt26_2",
      timestamps: true,
    };
  }
}

const EtiquetaExt26_2Schema = {
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

module.exports = { EtiquetaExt26_2, EtiquetaExt26_2Schema };
