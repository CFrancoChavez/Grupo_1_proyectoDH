const express = require("express");
const router = express.Router();
const path = require('path');
const controladorPrincipal = require("../controllers/mainController");

router.get("/", controladorPrincipal.index);
//router.get("/detalle/:id", controladorPrincipal.detalleMenu);
//router.get('/detalle',controladorPrincipal.productos);

module.exports = router;