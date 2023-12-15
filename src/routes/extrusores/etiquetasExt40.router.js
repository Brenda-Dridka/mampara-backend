const express = require("express");
const router = express.Router();
const etiquetasExt40Controller = require("../../controllers/extrusores/etiquetasExt40.controller");

router
  .get("/", etiquetasExt40Controller.get)
  .get("/:id", etiquetasExt40Controller.getById)
  .post("/", etiquetasExt40Controller.create)
  .put("/:id", etiquetasExt40Controller.update)
  .delete("/:id", etiquetasExt40Controller._delete);

module.exports = router;
