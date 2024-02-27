const express = require("express");
const router = express.Router();
const rolesPermisosController = require("../controllers/rolesPermisos.controller");

router
  .get("/", rolesPermisosController.get)
  .get("/:id", rolesPermisosController.getById)
  .post("/", rolesPermisosController.create)
  .put("/:id", rolesPermisosController.update)
  .delete("/:id", rolesPermisosController._delete);

module.exports = router;
