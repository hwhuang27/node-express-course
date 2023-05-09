const express = require('express');
const app = express();
const {products, people} = require('./data')

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1> <a href="/api/products">products</a>');
})

app.get('/api/products/', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image};
    })
    res.json(newProducts);
})

// Route parameters - a placeholder where the user provides the data
// We can access this data by using req.params (returned as an object)
app.get('/api/products/:productID', (req, res) => {
    const {productID} = req.params;
    console.log(productID);
    const singleProduct = products.find((product) => product.id === Number(productID))

    if(!singleProduct){
        res.status(404).send('Product does not exist!');
    }

    res.json(singleProduct);
})

app.listen(5000, () => {
    console.log(`Listening on port 5000...`);
})