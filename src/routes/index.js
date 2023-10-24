const express = require("express");

const usersRouter = require("./user.router");
const productosRouter = require("./producto.router");
const productosExtruidosRouter = require("./productoExtruido.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/users", usersRouter);
  router.use("/productos", productosRouter);
  router.use("/productos-extruidos", productosExtruidosRouter);
}

module.exports = routerApi;
