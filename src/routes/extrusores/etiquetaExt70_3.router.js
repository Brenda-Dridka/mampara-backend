const express = require("express");
const router = express.Router();
const etiquetasExt70_3Controller = require("../../controllers/extrusores/etiquetaExt70_3.controller");

router
  .get("/", etiquetasExt70_3Controller.get)
  .get("/:id", etiquetasExt70_3Controller.getById)
  .post("/", etiquetasExt70_3Controller.create)
  .put("/:id", etiquetasExt70_3Controller.update)
  .delete("/:id", etiquetasExt70_3Controller._delete);

module.exports = router;
