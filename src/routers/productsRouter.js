const express = require("express");
const router = express.Router();
const path = require('path');
const controladorPrincipal = require("../controllers/productController");

router.get("/products",controladorPrincipal.productos)
router.get("/detalle/:id?",controladorPrincipal.detalleProducto);
//router.get('/',controladorPrincipal.productos);
router.get('/carrito',controladorPrincipal.carro);
router.get('/products_create_form',controladorPrincipal.crearProducto);
router.post('/products_create_form/:id?',controladorPrincipal.store);
module.exports = router;