const express = require("express");
const router = express.Router();
const etiquetasExt26_1Controller = require("../../controllers/extrusores/etiquetasExt26_1.controller");

router
  .get("/", etiquetasExt26_1Controller.get)
  .get("/:id", etiquetasExt26_1Controller.getById)
  .post("/", etiquetasExt26_1Controller.create)
  .put("/:id", etiquetasExt26_1Controller.update)
  .delete("/:id", etiquetasExt26_1Controller._delete);

module.exports = router;
