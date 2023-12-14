const express = require("express");
const router = express.Router();
const etiquetasExt54_2Controller = require("../../controllers/etiquetasExt54_2.controller");

router
  .get("/", etiquetasExt54_2Controller.get)
  .get("/:id", etiquetasExt54_2Controller.getById)
  .post("/", etiquetasExt54_2Controller.create)
  .put("/:id", etiquetasExt54_2Controller.update)
  .delete("/:id", etiquetasExt54_2Controller._delete);

module.exports = router;
