const fs = require("fs");
const path = require("path");

/*const menuDbPath = path.join(__dirname, "../db/platos.json");*/

const readJsonFile = ( path ) => {
    const data = fs.readFileSync(path, "utf-8");
    const dataParsed = JSON.parse(data);
    return dataParsed;
}

const controller = {

    index: (req, res) => {
        // const menu = readJsonFile(menuDbPath);

        return res.render("home" )
    },
    

    //detalle: (req, res) => {
        
        /* const error = platoEncontrado ? null : "El plato no se encontró";
        return res.render("detalleMenu", { platoEncontrado, error }); */

        /* return res.render("error", {message: "El plato no se encontró"}) */
    }


module.exports = controller;