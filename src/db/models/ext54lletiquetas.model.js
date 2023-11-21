const { Model, DataTypes, Sequelize } = require("sequelize");

const EXT54LLETIQUETAS_TABLE = "Ext54llEtiquetas";

class Ext54llEtiqueta extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: EXT54LLETIQUETAS_TABLE,
      modelName: "Ext54llEtiqueta",
      timestamps: true,
    };
  }
}

const Ext54llEtiquetaSchema = {
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
};

module.exports = { Ext54llEtiqueta, Ext54llEtiquetaSchema };
