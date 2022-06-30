const fs = require("fs");
const path = require("path");

const readJsonFile = (path) => {
    const data = fs.readFileSync(path, "utf-8");
    const dataParsed = JSON.parse(data);
    return dataParsed;
}
const controller = {
    usuario: (req, res) => {

        res.render("formulariologin")
    }
    


};


module.exports = controller;