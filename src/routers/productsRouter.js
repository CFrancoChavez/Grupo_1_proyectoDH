const express = require("express");
const router = express.Router();
const path = require('path');
const upload = require("../middlewares/multerParaProductos");
const controladorPrincipal = require("../controllers/productController");

router.get("/",controladorPrincipal.productos)
router.get("/detalle/:id",controladorPrincipal.detalleProducto);
router.get('/carrito',controladorPrincipal.carro);
router.get('/crear',controladorPrincipal.crearProducto);
router.post('/crear', upload.single("productImage"), controladorPrincipal.store);
module.exports = router; 