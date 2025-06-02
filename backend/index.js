const express = require('express');
const cors = require('cors');
const products = require('./data/products');
const categories = require('./data/categories');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/productos', (req, res) => {
    const categoria = req.query.categoria;

    if (categoria) {
        const filteredProducts = products.filter(
            product => product.category && product.category.toLowerCase() === categoria.toLowerCase()
        );
        res.json(filteredProducts);
    } else {
        res.json(products);
    }
});

app.get('/api/categorias', (req, res) => {
    res.json(categories);
});

app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
});
app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
