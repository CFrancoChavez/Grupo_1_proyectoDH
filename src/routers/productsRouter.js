const express = require("express");
const router = express.Router();
const path = require('path');
const controladorPrincipal = require("../controllers/productController");


router.get("/detalle/:id?", controladorPrincipal.detalleProducto);
router.get('/',controladorPrincipal.productos);
router.get('/carrito',controladorPrincipal.carro);
router.get('/products_create_form',controladorPrincipal.crearProducto);
module.exports = router;