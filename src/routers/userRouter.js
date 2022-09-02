const express = require("express");
const router = express.Router();
const path = require('path');
const userController = require("../controllers/userController");
//const upload = require("../middlewares/multerParaUsuarios")
const multer = require('multer'); //seguir escribiendo codigo de multer -- konrad
const { body } = require('express-validator');//nuevo código express validator --konrad





//nuevo codigo multer --konrad
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/profileImages')
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`
        cb(null, fileName);
    }
});

const uploadFile = multer({ storage });
//nuevo codigo multer --konrad



//nuevo código para array de validations (middleware de proceso de registro) --konrad
const validations = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('lastName').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('email').notEmpty().withMessage('Tienes que escribir un email').bail().isEmail(),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña')
];
//nuevo código para array de validations (middleware de proceso de registro) --konrad



//mostrar la vista del login
router.get('/login', userController.loginForm);

//procesar el login
router.post('/login', userController.processLogin);

//mostrar la vista del registro
router.get('/registro', userController.registerForm);

//procesar el registro
router.post('/registro', uploadFile.single('imagenUsuario'), validations, userController.processForm);









module.exports = router;