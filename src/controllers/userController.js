const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const readJsonFile = (path) => {
    const data = fs.readFileSync(path, "utf-8");
    const dataParsed = JSON.parse(data);
    return dataParsed;
}
const controller = {
    usuario: (req, res) => {

        res.render("formulariologin")
    },
    registro: (req, res) => {
        res.render('formulario');
    }   


};


module.exports = controller;