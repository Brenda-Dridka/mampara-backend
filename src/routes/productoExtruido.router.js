const express = require("express");
const router = express.Router();
const productosExtruidosController = require("../controllers/productosExtruidos.controller");

router
  .get("/", productosExtruidosController.get)
  .get("/:id", productosExtruidosController.getById)
  .post("/", productosExtruidosController.create)
  .put("/:id", productosExtruidosController.update)
  .delete("/:id", productosExtruidosController._delete);

module.exports = router;
