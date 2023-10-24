const { User, UserSchema } = require("./users.model");
const { Producto, ProductoSchema } = require("./productos.model");
const {
  ProductoExtruido,
  ProductoExtruidoSchema,
} = require("./productosExtruidos.model");

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Producto.init(ProductoSchema, Producto.config(sequelize));
  ProductoExtruido.init(
    ProductoExtruidoSchema,
    ProductoExtruido.config(sequelize)
  );
}

module.exports = setupModels;
