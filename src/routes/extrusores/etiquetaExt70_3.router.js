const express = require("express");
const router = express.Router();
const etiquetasExt70_2Controller = require("../../controllers/etiquetasExt70_2.controller");

router
  .get("/", etiquetasExt70_2Controller.get)
  .get("/:id", etiquetasExt70_2Controller.getById)
  .post("/", etiquetasExt70_2Controller.create)
  .put("/:id", etiquetasExt70_2Controller.update)
  .delete("/:id", etiquetasExt70_2Controller._delete);

module.exports = router;
