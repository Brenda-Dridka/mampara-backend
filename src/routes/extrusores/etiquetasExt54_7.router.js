const express = require("express");
const router = express.Router();
const etiquetasExt54_7Controller = require("../../controllers/extrusores/etiquetasExt54_7.controller");

router
  .get("/", etiquetasExt54_7Controller.get)
  .get("/:id", etiquetasExt54_7Controller.getById)
  .post("/", etiquetasExt54_7Controller.create)
  .put("/:id", etiquetasExt54_7Controller.update)
  .delete("/:id", etiquetasExt54_7Controller._delete);

module.exports = router;
