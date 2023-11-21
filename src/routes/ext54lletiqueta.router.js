const express = require("express");
const router = express.Router();
const ext54lletiquetasController = require("../controllers/ext54lletiquetas.controller");

router
  .get("/", ext54lletiquetasController.get)
  .get("/:id", ext54lletiquetasController.getById)
  .post("/", ext54lletiquetasController.create)
  .put("/:id", ext54lletiquetasController.update)
  .delete("/:id", ext54lletiquetasController._delete);

module.exports = router;
