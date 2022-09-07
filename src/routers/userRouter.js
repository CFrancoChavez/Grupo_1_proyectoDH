const express = require("express");
const router = express.Router();
const path = require('path');
const userController = require("../controllers/userController");

const multer = require('multer'); //nuevo código de multer para usuarios -- konrad
const { body } = require('express-validator');//nuevo código express validator --konrad
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');





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
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('imagenUsuario').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png'];
        
        
      
        if(!file) {
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname)
            if(!acceptedExtensions.includes(fileExtension)) {
                throw new Error('Las extensiones aceptadas son .jpg y .png');
            }
            
        }
        return true;
    }),

    //nuevo código para comparar y confirmar contraseñas --konrad
    body('password_confirm').custom((value, { req }) => {

        if(req.body.password !== req.body.password_confirm) {
           throw new Error('Las contraseñas no coinciden')
          }
          return true
        
    })
];
//nuevo código para array de validations (middleware de proceso de registro) --konrad



//mostrar la vista del login
router.get('/login', guestMiddleware, userController.loginForm);

//procesar el login
router.post('/login', userController.processLogin);

//mostrar la vista del registro
router.get('/registro', guestMiddleware, userController.registerForm); //nuevo código, se agregó el middleware guestMiddleware --konrad

//procesar el registro
router.post('/registro', uploadFile.single('imagenUsuario'), validations, userController.processForm);

//detalle de usuario 
router.get('/detalleusuario', authMiddleware, userController.userDetail);

//proceso de logout
router.get('/logout', userController.logout);









module.exports = router;