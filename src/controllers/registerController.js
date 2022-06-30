const fs = require("fs");
const path = require("path");

const readJsonFile = ( path ) => {
    const data = fs.readFileSync(path, "utf-8");
    const dataParsed = JSON.parse(data);
    return dataParsed;
}
const controller = {
    registro: (req, res) => {

        return res.render("formulario")
    },

    
    };


module.exports = controller;