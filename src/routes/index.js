const express = require("express");

const usersRouter = require("./user.router");
const productosRouter = require("./producto.router");
const productosExtruidosRouter = require("./productoExtruido.router");
const etiquetasRouter = require("./etiqueta.router");
const extrusoresRouter = require("./extrusor.router");

//implementacion de las etiquetas por extrusor
const etiquetasExt54_2Router = require("./etiquetaext54_2.router");
const etiquetasBusslRouter = require("./etiquetaBussl.router");
const etiquetasExt70_2Router = require("./etiquetaExt70_2.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/users", usersRouter);
  router.use("/productos", productosRouter);
  router.use("/productos-extruidos", productosExtruidosRouter);
  router.use("/etiquetas", etiquetasRouter);
  router.use("/extrusores", extrusoresRouter);
  //implementacion de las etiquetas por extrusor
  router.use("/etiquetasExt54_2", etiquetasExt54_2Router);
  router.use("/etiquetasBussl", etiquetasBusslRouter);
  router.use("/etiquetasExt70_2", etiquetasExt70_2Router);
}

module.exports = routerApi;
