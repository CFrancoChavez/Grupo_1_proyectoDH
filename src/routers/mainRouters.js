const express = require("express");
const router = express.Router();
const path = require('path');
const mainController = require("../controllers/mainController");

router.get("/", mainController.index);
//router.get("/detalle/:id", controladorPrincipal.detalleMenu);
//router.get('/detalle',controladorPrincipal.productos);

module.exports = router;