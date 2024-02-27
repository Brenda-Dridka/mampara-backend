const express = require("express");
const router = express.Router();
const etiquetasExt54_3Controller = require("../../controllers/extrusores/etiquetasExt54_3.controller");

router
  .get("/", etiquetasExt54_3Controller.get)
  .get("/:id", etiquetasExt54_3Controller.getById)
  .post("/", etiquetasExt54_3Controller.create)
  .put("/:id", etiquetasExt54_3Controller.update)
  .delete("/:id", etiquetasExt54_3Controller._delete);

module.exports = router;
