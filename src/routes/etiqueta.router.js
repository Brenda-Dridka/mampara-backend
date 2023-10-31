const express = require("express");
const router = express.Router();
const etiquetasController = require("../controllers/etiquetas.controller");

router
  .get("/", etiquetasController.get)
  .get("/:id", etiquetasController.getById)
  .post("/", etiquetasController.create)
  .put("/:id", etiquetasController.update)
  .delete("/:id", etiquetasController._delete);

module.exports = router;
