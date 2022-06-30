const express = require("express");
const router = express.Router();
const path = require('path');
const controladorPrincipal = require("../controllers/registerController");


//router.get("/detalle/:id", controladorPrincipal.detalleMenu);
router.get('/',controladorPrincipal.registro);

module.exports = router;