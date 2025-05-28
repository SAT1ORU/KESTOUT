// backend/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Importa los productos
const products = require('./data/products');

// Importa las categorías
const categories = require('./data/categories'); // Asegúrate de que esta línea esté, importando desde el archivo

app.use(cors());
app.use(express.json());

// Ruta para obtener todos los productos
app.get('/api/productos', (req, res) => {
  const categoryFilter = req.query.categoria;
  let filteredProducts = products;

  if (categoryFilter) {
    filteredProducts = products.filter(product => product.category === categoryFilter);
  }
  res.json(filteredProducts);
});

// --- CAMBIO CLAVE AQUÍ: DE '/api/categories' A '/api/categorias' ---
app.get('/api/categorias', (req, res) => { // <--- ¡ASEGÚRATE DE QUE LA RUTA SEA 'categorias' CON 'A'!
  res.json(categories); // Envía el array 'categories' importado
});
// --- FIN CAMBIO CLAVE ---


// Ruta para la página de inicio (opcional)
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});