const express = require("express");
const router = express.Router();
const etiquetasExt54_6Controller = require("../../controllers/extrusores/etiquetasExt54_6.controller");

router
  .get("/", etiquetasExt54_6Controller.get)
  .get("/:id", etiquetasExt54_6Controller.getById)
  .post("/", etiquetasExt54_6Controller.create)
  .put("/:id", etiquetasExt54_6Controller.update)
  .delete("/:id", etiquetasExt54_6Controller._delete);

module.exports = router;
