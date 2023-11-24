const { User, UserSchema } = require("./users.model");
const { Producto, ProductoSchema } = require("./productos.model");
const {
  ProductoExtruido,
  ProductoExtruidoSchema,
} = require("./productosExtruidos.model");
const { Etiqueta, EtiquetaSchema } = require("./etiquetas.model");
const { Extrusor, ExtrusorSchema } = require("./extrusores.model");

//implementacion de las etiquetas por extrusor
const {
  EtiquetaExt54_2,
  EtiquetaExt54_2Schema,
} = require("./etiquetasExt54_2.model");

const {
  EtiquetaBussl,
  EtiquetaBusslSchema,
} = require("./etiquetasBussl.model");
const {
  EtiquetaExt70_2,
  EtiquetaExt70_2Schema,
} = require("./etiquetasExt70_2.model");

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Producto.init(ProductoSchema, Producto.config(sequelize));
  ProductoExtruido.init(
    ProductoExtruidoSchema,
    ProductoExtruido.config(sequelize)
  );
  Etiqueta.init(EtiquetaSchema, Etiqueta.config(sequelize));
  Extrusor.init(ExtrusorSchema, Extrusor.config(sequelize));

  ///implementacion de etiquetas
  EtiquetaExt54_2.init(
    EtiquetaExt54_2Schema,
    EtiquetaExt54_2.config(sequelize)
  );
  EtiquetaBussl.init(EtiquetaBusslSchema, EtiquetaBussl.config(sequelize));
  EtiquetaExt70_2.init(
    EtiquetaExt70_2Schema,
    EtiquetaExt70_2.config(sequelize)
  );
}

module.exports = setupModels;
