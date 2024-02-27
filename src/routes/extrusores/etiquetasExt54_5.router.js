const express = require("express");
const router = express.Router();
const etiquetasExt54_5Controller = require("../../controllers/extrusores/etiquetasExt54_5controller");

router
  .get("/", etiquetasExt54_5Controller.get)
  .get("/:id", etiquetasExt54_5Controller.getById)
  .post("/", etiquetasExt54_5Controller.create)
  .put("/:id", etiquetasExt54_5Controller.update)
  .delete("/:id", etiquetasExt54_5Controller._delete);

module.exports = router;
