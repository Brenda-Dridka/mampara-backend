const express = require("express");

const usersRouter = require("./user.router");
const productosRouter = require("./producto.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/users", usersRouter);
  router.use("/productos", productosRouter);
}

module.exports = routerApi;
