const db = require("../../database/models/index");

const controller = {
    detalleProducto: (req, res) => {
        const id = req.params.id;
        db.Product.findByPk(id)
            .then(function (product){
                return res.status(200).json({
                    meta: {
                        code: res.statusCode,

                        url: req.protocol+"://"+req.get("host")+req.originalUrl
                    },
                    data: product
                })
            })

    },
    productos: (req, res) => {
        db.Product.findAll({

        })
        .then(function (products){
            return res.status(200).json({
                meta: {
                    code: res.statusCode,
                    total: products.lenght,
                    url: req.protocol+"://"+req.get("host")+req.originalUrl
                },
                data: products
            })
        })

    }
}  
module.exports = controller;                    