const fs = require("fs");
const path = require("path");
const bcryptjs = require('bcryptjs')
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');

const { validationResult }= require('express-validator') //nuevo código express validator --konrad
const User = require('../models/User') //nuevo código --konrad



const controller = {

    loginForm: (req, res) => {
        // Mostrar el formulario de login
        return res.render("formularioLoginUsuario");
    },

        //nuevo código --> procesamiento de login y verificación de contraseña con bcrypt --konrad
    processLogin: (req, res) => {
        // Recibir la info del formulario de login y almacenar en un storage
        let userToLog = User.findByField('email', req.body.email);
        
        if(userToLog) {
            let passwordOk = bcryptjs.compareSync(req.body.password, userToLog.password);
            if(passwordOk) {
                delete userToLog.password;
                req.session.userLogged = userToLog;
                return res.redirect('/usuarios/detalleusuario')
            }
            return res.render('formularioLoginUsuario', {
                errors: {
                    email: {
                        msg: 'Las credenciales ingresadas no son válidas'
                    }
                }
            });
        };

        return res.render('formularioLoginUsuario', {
            errors: {
                email: {
                    msg: 'No se encuentra este email registrado en Sports House'
                }
            }
        });
    },

      //nuevo código muestra la vista del detalle de usuario --konrad 
      userDetail: (req, res) => {
        return res.render('detalleUsuarios', {
            user: req.session.userLogged
        })
    },


    registerForm: (req, res) => {
        // Mostrar el formulario de registro
        return res.render("formularioRegistroUsuario");
    },

    //modificación en el código para express validator --konrad
    processForm: (req, res) => {
        // Procesar el formulario de registro
      const resultValidation = validationResult(req);
     
      if(resultValidation.errors.length > 0) {
        return res.render("formularioRegistroUsuario", {
            errors: resultValidation.mapped(),
            oldData: req.body
        });
      };


      let userInDB = User.findByField('email', req.body.email);
      //return res.send(userInDB);


      //nuevo código validación de email --konrad
      if(userInDB) {
        return res.render('formularioRegistroUsuario', {
            errors: {
                email: {
                    msg: 'Este email ya está registrado'
                }
            },
            oldData: req.body
        })
      };


      //nuevo código encriptación de contraseña
      let userToCreate = {
        ...req.body,
        password: bcryptjs.hashSync(req.body.password, 10),
        password_confirm: bcryptjs.hashSync(req.body.password_confirm, 10),
        avatar: req.file.filename
      }

      let userCreated = User.create(userToCreate);
      return res.redirect('/usuarios/login')
    }

  
};


module.exports = controller;





















/*const readJsonFile = (path) => {
    const data = fs.readFileSync(path, "utf-8");
    const dataParsed = JSON.parse(data);
    return dataParsed;
}
const controller = {
    loginForm: (req, res) => {
        // Mostrar el formulario de login
        return res.render("formularioLoginUsuario");
    },


    //nuevo código Konrad 
    processLogin: (req, res) => {
        // Recibir la info del formulario de login y almacenar en un storage
        //let userToLogin = 

    },

    registerForm: (req, res) => {
        // Mostrar el formulario de registro
        return res.render("formularioRegistroUsuario");
    },

    processRegister: (req, res) => {
        // Recibir la info del formulario de registro y almacenar en un storage
        let usersList = readJsonFile(usersFilePath);

        let user = {
            id: usersList[usersList.length -1].id + 1,
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            avatar: req.file.filename || ""
        }

        usersList.push(user);

        fs.writeFileSync(usersFilePath, JSON.stringify(usersList, null, 2));

        return res.redirect("/")
    }


};


module.exports = controller;


/* 

agregar al registro de usuarios el hasheo de contraseñas con bcryptjs

Terminar proceso de login
recibir los datos del usuario que se loguea
validar que el email exista en la db
validar que la contraseña coincida con la almacenada. (validar con bcryptjs)
si todo salió ok 
    guardar datos del usuario en session
    pueden enviar datos del usuario como el nombre y el avatar hacia las vistas con locals
    redirigir a perfil
si algo falla redirigir al formulario de login nuevamente

Para mostrar la página de perfil del usuario con los datos del usuario hay que
leer estos datos desde la session.
Pueden tener almacenado en session el id y el nombre y en base a eso, buscan el resto en la db
y todo lo envian a la vista de perfil


proceso de editar producto (muy parecido al crear producto)

proceso de eliminar un producto.


*/

