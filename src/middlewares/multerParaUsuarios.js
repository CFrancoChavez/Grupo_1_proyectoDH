/*const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, path.join(__dirname, '../../public/profileImages'))
    },
    filename: (req, file, cb)=>{
        const newFileName ='user' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
});
module.exports = multer({storage});*/