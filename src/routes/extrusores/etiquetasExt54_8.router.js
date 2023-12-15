const express = require("express");
const router = express.Router();
const etiquetasExt54_8Controller = require("../../controllers/extrusores/etiquetasExt54_8.controller");

router
  .get("/", etiquetasExt54_8Controller.get)
  .get("/:id", etiquetasExt54_8Controller.getById)
  .post("/", etiquetasExt54_8Controller.create)
  .put("/:id", etiquetasExt54_8Controller.update)
  .delete("/:id", etiquetasExt54_8Controller._delete);

module.exports = router;
