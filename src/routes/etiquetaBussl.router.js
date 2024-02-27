const express = require("express");
const router = express.Router();
const etiquetasBusslController = require("../controllers/etiquetasBussl.controller");

router
  .get("/", etiquetasBusslController.get)
  .get("/:id", etiquetasBusslController.getById)
  .post("/", etiquetasBusslController.create)
  .put("/:id", etiquetasBusslController.update)
  .delete("/:id", etiquetasBusslController._delete);

module.exports = router;
