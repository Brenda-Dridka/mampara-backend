const { User, UserSchema } = require("./users.model");
const { Producto, ProductoSchema } = require("./productos.model");
/* const {
  ProductoExtruidos,
  ProductoExtruidoSchema,
} = require("./productosExtruidos.model"); */

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Producto.init(ProductoSchema, Producto.config(sequelize));
  /*  ProductoExtruidos.init(
    ProductoExtruidoSchema,
    ProductoExtruidos.config(sequelize)
  ); */
}

module.exports = setupModels;
