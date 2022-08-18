//nuevo código Konrad


const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));




const readJsonFile = ( path ) => {
    const data = fs.readFileSync(path, "utf-8");
    const dataParsed = JSON.parse(data);
    return dataParsed;
}

const usuariosController = {
    usuarios: (req, res) => {

        return res.render("usuarios")
    },

    buscar: (req, res) => {
        /*const email = req.params.email;
        const password = req.params.password;
        

        const datos = readJsonFile(usersFilePath);
        const usuarioEncontrado = datos.find(usuario => {
            return datos.email == email
        })


        for(let i = 0; i < datos.length; i++) {
            if (datos[i].email === req.params.email && datos[i].password === req.params.password) {

            }
        }

        }*/
    }
    



};

module.exports = usuariosController;