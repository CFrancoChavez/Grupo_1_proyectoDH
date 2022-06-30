const express = require("express");
const router = express.Router();
const path = require('path');
const controladorPrincipal = require("../controllers/userController");


//router.get("/detalle/:id", controladorPrincipal.detalleMenu);
router.get('/',controladorPrincipal.usuario);
//router.get('/', controladorPrincipal.registro);
//router.get('/',controladorPrincipal.carro);

module.exports = router;