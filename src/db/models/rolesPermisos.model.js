const { Model, DataTypes, Sequelize } = require("sequelize");

const ROLPERMISOS_TABLE = "rolesPermisos";

class RolPermiso extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: ROLPERMISOS_TABLE,
      modelName: "RolPermiso",
      timestamps: true,
    };
  }
}

const RolesPermisosSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  rol: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "rol",
  },
  permiso: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "permiso",
  },
};

module.exports = { RolPermiso, RolesPermisosSchema };
