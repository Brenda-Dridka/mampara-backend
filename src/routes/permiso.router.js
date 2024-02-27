const express = require("express");
const router = express.Router();
const permisosController = require("../controllers/permisos.controller");

router
  .get("/", permisosController.get)
  .get("/:id", permisosController.getById)
  .post("/", permisosController.create)
  .put("/:id", permisosController.update)
  .delete("/:id", permisosController._delete);

module.exports = router;
