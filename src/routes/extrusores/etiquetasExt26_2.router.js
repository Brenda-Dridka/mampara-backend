const express = require("express");
const router = express.Router();
const etiquetasExt26_2Controller = require("../../controllers/extrusores/etiquetasExt26_2.controller");

router
  .get("/", etiquetasExt26_2Controller.get)
  .get("/:id", etiquetasExt26_2Controller.getById)
  .post("/", etiquetasExt26_2Controller.create)
  .put("/:id", etiquetasExt26_2Controller.update)
  .delete("/:id", etiquetasExt26_2Controller._delete);

module.exports = router;
