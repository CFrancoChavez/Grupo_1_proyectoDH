const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const db =require("../database/models/index");
// linea 6 hasta 10 código para usar con la base de datos Json
const readJsonFile = ( path ) => {
    const data = fs.readFileSync(path, "utf-8");
    const dataParsed = JSON.parse(data);
    return dataParsed;
}

const controller = {
	detalleProducto: (req, res) => {
        const id = req.params.id;
        db.Product.findByPk(id)
        .then(function (products) {
			return res.render("products/detalle", { productoEncontrado:products });
		})
	// Este metodo funciona con database json
    // detalleProducto: (req, res) => {

	// 	const productos = readJsonFile(productsFilePath);
	// 	const id = req.params.id;
	// 	const productoEncontrado = productos.find(producto => {
	// 		return producto.id == id
	// 	})

    //     return res.render("products/detalle", {productoEncontrado})
    	},
    carro: (req, res) => {
		// Leer de la base de datos los productos que estan en el carrito y enviarlos a la vista
        return res.render("products/carrito")
    },
	productos: (req, res) => {
        db.Product.findAll({
            
        })
        .then(function(productos){
  
            return res.render("products/products", {products: productos})
        })
	//Método para listar los productos con database Json.
    // productos: (req, res) => {
	// 	const productos = readJsonFile(productsFilePath);
    //     return res.render("products/products", {products: productos})
    },
    //Método para crear línea 31 hasta la 33 funciona con database Json.
    // crearProducto: (req, res) => {
    
    //     return res.render("products/products_create_form");
	crearProducto: (req, res) => {
			db.Product.findAll()
			.then(function(products){
				return res.render("products/products_create_form");
			})
    },
    // Create -  Method to store
	create: (req, res) => {
		// Do the magic
		//Leemos la db de productos para luego agregar un producto nuevo a la lista
		//const products = readJsonFile(productsFilePath) descomentar para usar con base Json.
		// Creamos la estructura de un producto nuevo con la info del formulario
		//const producto = {//se usa con Json
			//id: products[products.length -1].id + 1,// se usa con Json
		db.Product.create({
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			image: req.file?.filename || "default-image.png"
		})
		// Agregamos el producto creado al listado existente que leimos al principio
		//products.push(producto);se usa con Json
		// Reescribimos la db con los datos actualizados y en formato json
		//fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));se usa con Json
		// Redirigimos a la pagina de listado de productos
		//return //se usa con Json
		.then(function(){
            return res.redirect("/productos")
        })
		//res.redirect("/productos")
	},

	// Update - Form to edit
	//El código desde línea 65 a 70 funciona con la base de datos Json.
	// edit: (req, res) => {
	// 	//return res.json(req.params) para ver si llega el id
	// 	const products = readJsonFile(productsFilePath)
	// 	const product = products.find(product => product.id == req.params.id)
	
	// 	res.render('products/product_edit_form', { product });
	edit: async function (req, res) {
        const id = req.params.id;
        const product = await db.Product.findByPk(id);
        const products = await db.Product.findAll();
        
        return res.render('products/product_edit_form', { product });
	},
	// Update - Method to update
	//Desde la linea 80 a la 97 codigo que funciona con base de datos Json.
	// update: (req, res) => {
	// 	// Do the magic
	// 	const products = readJsonFile(productsFilePath)
	// 	for(let i = 0; i < products.length; i++) {
	// 		if(products[i].id == req.params.id){
	// 			products[i] = {
	// 				...products[i],
	// 				name: req.body.name,
	// 				price: req.body.price,
	// 				discount: req.body.discount,
	// 				category: req.body.category,
	// 				description: req.body.description
	// 				//image: req.file?.filename || "default-image.png"
	// 			} 
	// 		}
	// 	};
	// 	fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
	// 	return res.redirect("/productos");
	update: (req, res) => {
        const id = req.params.id;
        db.Product.update({
            name: req.body.name,
					price: req.body.price,
					discount: req.body.discount,
					category: req.body.category,
					description: req.body.description
					//image: req.file?.filename || "default-image.png"
        },{
            where: {
                id
            }
        })
        .then(function(){
            return res.redirect("/productos");
        })
	},

	// Delete - Delete one product from DB
	//linea 119  hasta 125 funciona con base de datos Json
	// destroy : (req, res) => {
	// 	const products = readJsonFile(productsFilePath);
	// 	const productosFiltrados = products.filter(product => product.id != req.params.id);

	// 	fs.writeFileSync(productsFilePath, JSON.stringify(productosFiltrados, null, 2));
	// 	return res.redirect("/productos");
	// }
	destroy: (req, res) => {
        const id = req.params.id;
        db.Product.destroy({ where: { id }})
        .then(function(){
            return res.redirect("/productos");
        })


    
    },
}


module.exports = controller;