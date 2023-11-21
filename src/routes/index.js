const express = require("express");

const usersRouter = require("./user.router");
const productosRouter = require("./producto.router");
const productosExtruidosRouter = require("./productoExtruido.router");
const etiquetasRouter = require("./etiqueta.router");
const extrusoresRouter = require("./extrusor.router");
const ext54lletiquetasRouter = require("./ext54lletiqueta.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/users", usersRouter);
  router.use("/productos", productosRouter);
  router.use("/productos-extruidos", productosExtruidosRouter);
  router.use("/etiquetas", etiquetasRouter);
  router.use("/extrusores", extrusoresRouter);
  router.use("./ext54lletiquetas", ext54lletiquetasRouter);
}

module.exports = routerApi;
