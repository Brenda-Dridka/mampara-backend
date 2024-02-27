const express = require("express");
const router = express.Router();
const etiquetasExt54_1Controller = require("../../controllers/extrusores/etiquetasExt54_1.controller");

router
  .get("/", etiquetasExt54_1Controller.get)
  .get("/:id", etiquetasExt54_1Controller.getById)
  .post("/", etiquetasExt54_1Controller.create)
  .put("/:id", etiquetasExt54_1Controller.update)
  .delete("/:id", etiquetasExt54_1Controller._delete);

module.exports = router;
