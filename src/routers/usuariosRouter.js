//nuevo código Konrad

const express = require("express");
const router = express.Router();
const path = require('path');

const controladorPrincipal = require("../controllers/usuariosController");



router.get('/',controladorPrincipal.usuarios);



module.exports = router;