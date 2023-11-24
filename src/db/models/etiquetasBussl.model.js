const { Model, DataTypes, Sequelize } = require("sequelize");

const ETIQUETASBUSSITABLE = "EtiquetaBussl";

class EtiquetaBussl extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: ETIQUETASBUSSITABLE,
      modelName: "EtiquetaBussl",
      timestamps: true,
    };
  }
}

const EtiquetaBusslSchema = {
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

module.exports = { EtiquetaBussl, EtiquetaBusslSchema };
