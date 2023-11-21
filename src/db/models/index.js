const { User, UserSchema } = require("./users.model");
const { Producto, ProductoSchema } = require("./productos.model");
const {
  ProductoExtruido,
  ProductoExtruidoSchema,
} = require("./productosExtruidos.model");
const { Etiqueta, EtiquetaSchema } = require("./etiquetas.model");
const { Extrusor, ExtrusorSchema } = require("./extrusores.model");
const {
  Ext54llEtiqueta,
  Ext54llEtiquetaSchema,
} = require("./ext54lletiquetas.model");

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Producto.init(ProductoSchema, Producto.config(sequelize));
  ProductoExtruido.init(
    ProductoExtruidoSchema,
    ProductoExtruido.config(sequelize)
  );
  Etiqueta.init(EtiquetaSchema, Etiqueta.config(sequelize));
  Extrusor.init(ExtrusorSchema, Extrusor.config(sequelize));

  Ext54llEtiqueta.init(
    Ext54llEtiquetaSchema,
    Ext54llEtiqueta.config(sequelize)
  );
}

module.exports = setupModels;
