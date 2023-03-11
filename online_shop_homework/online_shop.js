import express from "express";
const app = express();
import fs from "fs"

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))


let products  = JSON.parse((fs.readFileSync("./products.json", {encoding: "utf-8"})));

app.use((req, res, next) => {
    console.log(`Request on the route ${req.path} was made at ${new Date().toLocaleTimeString()}`);
    next();
});

// default route
app.get("/", (req, res)=>{
    res.send(`<h1>This is the default route</h1>`)
})

// get all products
app.get("/products", (req,res)=>{
    let productsJSON = JSON.stringify(products, null, 2);
    res.type('json').send(productsJSON);
})

//Get product by id
app.get("/products/:id", (req,res)=>{
    const productId = (req.params.id);
    let product = products.find((p)=> p.id === (productId));
    if(product){
        res.type(`json`).send(product);
    }
    else{
        res.status(404).send("<h1>Product not found</h1>")
    }

})

//Add new product
app.post("/products",(req,res)=>{
    const body = req.body;
    let product = {
        id: body.id,
        name: body.name,
        price: body.price,
        rating: body.rating,
        description: body.description,
        category: body.category,
        isInStock: body.isInStock
    }
    products.push(product);
    fs.writeFileSync("./products.json", JSON.stringify(products, null, 2));
    res.send(product);
})

// Edit a product by id,
app.put('/products/:id', (req, res) => {
    let productId = req.params.id
    let body = req.body;
    const index = products.findIndex(p => p.id === productId);
    if (index !== -1) {
      let updatedProduct = {
        id: productId,
        name: body.name,
        price: body.price,
        rating: body.rating,
        description: body.description,
        category: body.category,
        isInStock: body.isInStock
      };
      products[index] = updatedProduct;
      fs.writeFileSync('./products.json', JSON.stringify(products, null,2));
      res.send(updatedProduct);
    } else {
      res.status(404).send('Product not found');
    }
  });

// Remove a product by ID
app.delete("/products/:id", (req,res)=>{
    let productId = req.params.id;
    let index = products.findIndex(p => p.id === productId);
    if (index !== -1) {
      products.splice(index, 1);
      fs.writeFileSync('./products.json', JSON.stringify(products, null,2));
      res.json(`Product with id ${productId} has been removed.`);
    } else {
      res.status(404).send('Product not found');
    }
})
// Delete all products
app.delete("/products",(req,res)=>{
    products = undefined;
    fs.writeFileSync('./products.json', JSON.stringify("products have been deleted", null,2));
    res.send("Products deleted")
})

// Set product to be out of stock by id
app.patch("/products/:id",(req,res)=>{
    let productId = req.params.id;
    let index = products.findIndex(p => p.id === productId);
    if(index !== -1){
        products[index].isInStock = false;
        fs.writeFileSync('./products.json', JSON.stringify(products, null,2));
        res.json(`Product with id ${productId} has been set to out of stock.`);
    }
    else{
        res.status(404).send(`Product not found`)
    }
})


app.listen(3000, ()=>{
    console.log("Server is active...")
})

