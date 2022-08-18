

//código 3 sprint
const path = require("path");
const express = require("express");
const app = express();
const methodOverride =  require('method-override');
const mainRouter = require("./routers/mainRouters");
const routerDeProductos = require('./routers/productsRouter');
const routerUsers= require('./routers/userRouter');
const registerRouter = require('./routers/registerRouter');
const usuariosRouter = require('./routers/usuariosRouter'); //nuevo código Konrad


const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use("/", mainRouter);
app.use('/productos', routerDeProductos);
app.use('/formulariologin', routerUsers);
app.use('/formulario', registerRouter);
app.use('/usuarios', usuariosRouter); //nuevo código Konrad



app.listen(PORT, () => console.log("Servidor corriendo en el puerto: " + PORT));



