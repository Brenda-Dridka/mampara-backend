const express = require("express");
const router = express.Router();
const etiquetasExt54_4Controller = require("../../controllers/extrusores/etiquetasExt54_4.controller");

router
  .get("/", etiquetasExt54_4Controller.get)
  .get("/:id", etiquetasExt54_4Controller.getById)
  .post("/", etiquetasExt54_4Controller.create)
  .put("/:id", etiquetasExt54_4Controller.update)
  .delete("/:id", etiquetasExt54_4Controller._delete);

module.exports = router;
