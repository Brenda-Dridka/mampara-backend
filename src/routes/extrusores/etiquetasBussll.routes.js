const express = require("express");
const router = express.Router();
const etiquetasBussllController = require("../../controllers/extrusores/etiquetasBussll.controller");

router
  .get("/", etiquetasBussllController.get)
  .get("/:id", etiquetasBussllController.getById)
  .post("/", etiquetasBussllController.create)
  .put("/:id", etiquetasBussllController.update)
  .delete("/:id", etiquetasBussllController._delete);

module.exports = router;
