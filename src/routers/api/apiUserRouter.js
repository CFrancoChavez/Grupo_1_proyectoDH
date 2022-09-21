const express = require("express");
const router = express.Router();
const controladorPrincipal= require("../../controllers/api/apiUserController");

router.get("/",controladorPrincipal.usuarios)
router.get("/detalle/:id",controladorPrincipal.detalleUsuario);
//router.get('/carrito',controladorPrincipal.carro);
//router.get('/crear',controladorPrincipal.crearProducto);
//router.post('/crear', upload.single("productImage"), controladorPrincipal.create);
//router.get('/:id/editar',controladorPrincipal.edit);
//router.put('/:id', upload.single("productImage"), controladorPrincipal.update)
//router.delete('/:id',controladorPrincipal.destroy)
module.exports = router; 