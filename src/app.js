

//código 3 sprint
const path = require("path");
const express = require("express");
const app = express();
const methodOverride =  require('method-override');
const mainRouter = require("./routers/mainRouters");
const routerDeProductos = require('./routers/productsRouter');
const usuariosRouter = require('./routers/userRouter');
/* const routerUsers= require('./routers/userRouter');
const registerRouter = require('./routers/registerRouter');
  *///nuevo código Konrad


const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use('/productos', routerDeProductos);
app.use('/usuarios', usuariosRouter);
app.use("/", mainRouter);
/* app.use('/formulariologin', routerUsers);
app.use('/formulario', registerRouter);
 //nuevo código Konrad */
/*  */



app.listen(PORT, () => console.log("Servidor corriendo en el puerto: " + PORT));



