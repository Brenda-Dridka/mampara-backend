const express = require("express");
const router = express.Router();
const etiquetasExt58Controller = require("../../controllers/extrusores/etiquetasExt54_8.controller");

router
  .get("/", etiquetasExt58Controller.get)
  .get("/:id", etiquetasExt58Controller.getById)
  .post("/", etiquetasExt58Controller.create)
  .put("/:id", etiquetasExt58Controller.update)
  .delete("/:id", etiquetasExt58Controller._delete);

module.exports = router;
