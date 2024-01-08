const { Model, DataTypes, Sequelize } = require("sequelize");

const ETIQUETAS_TABLE = "etiquetas";

class Etiqueta extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: ETIQUETAS_TABLE,
      modelName: "Etiqueta",
      timestamps: true,
    };
  }
}

const EtiquetaSchema = {
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

// Definir la relación de tabla foránea manualmente
Etiqueta.belongsToProducto = () => {
  Etiqueta.belongsTo(productos, {
    foreignKey: "id_producto",
    as: "producto",
  });
};

module.exports = { Etiqueta, EtiquetaSchema };
