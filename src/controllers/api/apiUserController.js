const db = require("../../database/models/index");

const controller = {
    detalleUsuario: (req, res) => {
        const id = req.params.id;
        db.User.findByPk(id)
            .then(function (user){
                return res.status(200).json({
                    meta: {
                        code: res.statusCode,

                        url: req.protocol+"://"+req.get("host")+req.originalUrl
                    },
                    data: user
                })
            })

    },
    usuarios: (req, res) => {
        db.User.findAll({

        })
        .then(function (users){
            return res.status(200).json({
                meta: {
                    code: res.statusCode,
                    total: users.lenght,
                    url: req.protocol+"://"+req.get("host")+req.originalUrl
                },
                data: users
            })
        })

    }
}  
module.exports = controller;                    