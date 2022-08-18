const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const upload = require("../middlewares/multerParaUsuarios")


router.get('/login', userController.loginForm);
router.post('/login', userController.processLogin);
router.get('/registro', userController.registerForm);
router.post('/registro', upload.single('imagenUsuario'), userController.processRegister);


module.exports = router;