const express = require("express");
const router = express.Router();
const etiquetasExt70_1Controller = require("../../controllers/extrusores/etiquetasExt70_1.controller");

router
  .get("/", etiquetasExt70_1Controller.get)
  .get("/:id", etiquetasExt70_1Controller.getById)
  .post("/", etiquetasExt70_1Controller.create)
  .put("/:id", etiquetasExt70_1Controller.update)
  .delete("/:id", etiquetasExt70_1Controller._delete);

module.exports = router;
