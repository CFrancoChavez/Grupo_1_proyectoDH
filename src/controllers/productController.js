const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const readJsonFile = ( path ) => {
    const data = fs.readFileSync(path, "utf-8");
    const dataParsed = JSON.parse(data);
    return dataParsed;
}
const controller = {
    detalleProducto: (req, res) => {

		const productos = readJsonFile(productsFilePath)
		const id = req.params.id;
		const productoEncontrado = products.find(detalle => {
			return detalle.id == id
		})

        return res.render("products/detalle", {productoEncontrado})
    },
    carro: (req, res) => {

        return res.render("products/carrito")
    },
    productos: (req, res) => {
		
        return res.render("products/products", {products})
    },
    
    crearProducto: (req, res) => {
    
        return res.render("products/products_create_form")
    },
    // Create -  Method to store
	store: (req, res) => {
		// Do the magic
		const products = readJsonFile(productsFilePath)
		const producto = {
			id: products[products.length -1].id + 1,
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			image: req.file?.filename || "default-image.png"
		}

		products.push(producto);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		return res.redirect("/products")
	},

	// Update - Form to edit
	edit: (req, res) => {
		const products = readJsonFile(productsFilePath)
		const product = products.find(product => product.id == req.params.id)
		res.render('product-edit-form', { product });
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
		const products = readJsonFile(productsFilePath)
		for(let i = 0; i < products.length; i++) {
			if(products[i].id == req.params.id){
				products[i] = {
					...products[i],
					name: req.body.name,
					price: req.body.price,
					discount: req.body.discount,
					category: req.body.category,
					description: req.body.description
					//image: req.file?.filename || "default-image.png"
				} 
			}
		};
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		return res.redirect("/products");
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		const products = readJsonFile(productsFilePath);
		const productosFiltrados = products.filter(product => product.id != req.params.id);

		fs.writeFileSync(productsFilePath, JSON.stringify(productosFiltrados, null, 2));
		return res.redirect("/products");
	}


    
    };


module.exports = controller;