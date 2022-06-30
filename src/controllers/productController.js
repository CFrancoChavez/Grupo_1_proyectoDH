const fs = require("fs");
const path = require("path");

const readJsonFile = ( path ) => {
    const data = fs.readFileSync(path, "utf-8");
    const dataParsed = JSON.parse(data);
    return dataParsed;
}
const controller = {
    detalleProducto: (req, res) => {

        return res.render("products/detalle")
    },
    carro: (req, res) => {

        return res.render("products/carrito")
    },
    productos: (req, res) => {

        return res.send("products/listadoProductos")
    },
    
    crearProducto: (req, res) => {
    
        return res.render("products/products_create_form")
    },


    
    };


module.exports = controller;