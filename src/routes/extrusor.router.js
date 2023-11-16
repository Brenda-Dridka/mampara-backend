const express = require("express");
const router = express.Router();
const extrusoresController = require("../controllers/extrusores.controller");

router
  .get("/", extrusoresController.get)
  .get("/:id", extrusoresController.getById)
  .post("/", extrusoresController.create)
  .put("/:id", extrusoresController.update)
  .delete("/:id", extrusoresController._delete);

module.exports = router;
