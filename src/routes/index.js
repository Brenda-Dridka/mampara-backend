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
const etiquetasExt54_4Router = require("./extrusores/etiquetasExt54_4.router");
const etiquetasExt54_5Router = require("./extrusores/etiquetasExt54_5.router");
const etiquetasExt54_1Router = require("./extrusores/etiquetasExt54_1.router");
const etiquetasExt58Router = require("./extrusores/etiquetasExt58.router");
const etiquetasExt40Router = require("./extrusores/etiquetasExt40.router");
const etiquetasExt54_3Router = require("./extrusores/etiquetasExt54_3.router");
const etiquetasExt54_7Router = require("./extrusores/etiquetasExt54_7.router");
const etiquetasExt70_1Router = require("./extrusores/etiquetasExt70_1.router");
const etiquetasBussllRouter = require("./extrusores/etiquetasBussll.routes");
const etiquetasExt26_1Router = require("./extrusores/etiquetasExt26_1.router");
const etiquetasExt26_2Router = require("./extrusores/etiquetasExt26_2.router");
const etiquetasExt54_6Router = require("./extrusores/etiquetasExt54_6.router");
const etiquetasExt70_3Router = require("./extrusores/etiquetaExt70_3.router");
const etiquetasExt54_8Router = require("./extrusores/etiquetasExt54_8.router");

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
  router.use("/etiquetasExt54_4", etiquetasExt54_4Router);
  router.use("/etiquetasExt54_5", etiquetasExt54_5Router);
  router.use("/etiquetasExt54_1", etiquetasExt54_1Router);
  router.use("/etiquetasExt58", etiquetasExt58Router);
  router.use("/etiquetasExt40", etiquetasExt40Router);
  router.use("/etiquetasExt54_3", etiquetasExt54_3Router);
  router.use("/etiquetasExt54_7", etiquetasExt54_7Router);
  router.use("/etiquetasExt70_1", etiquetasExt70_1Router);
  router.use("/etiquetasBussll", etiquetasBussllRouter);
  router.use("/etiquetasExt26_1", etiquetasExt26_1Router);
  router.use("/etiquetasExt26_2", etiquetasExt26_2Router);
  router.use("/etiquetasExt54_6", etiquetasExt54_6Router);
  router.use("/etiquetasExt70_3", etiquetasExt70_3Router);
  router.use("/etiquetasExt54_8", etiquetasExt54_8Router);
}

module.exports = routerApi;
