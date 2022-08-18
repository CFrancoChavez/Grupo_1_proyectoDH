const express = require("express");
const router = express.Router();
const path = require('path');
const multer = require('multer');
const controladorPrincipal = require("../controllers/userController");
const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, path.join(__dirname, '../public/profileImages'))
    },
    filename: (req, file, cb)=>{
        const newFileName ='user' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
});
const upload = multer({storage})
//router.get("/detalle/:id", controladorPrincipal.detalleMenu);
router.get('/',controladorPrincipal.usuario);
//agregamos multer
//router.post('/', upload.single('imagenUsuario'),controladorPrincipal.guardar);
router.get('/', controladorPrincipal.registro);
//router.get('/',controladorPrincipal.carro);

module.exports = router;