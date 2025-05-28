// backend/server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const products = [
  { _id: "1", name: "Laptop Gamer", price: 2500, description: "Alta performance para juegos" },
  { _id: "2", name: "Auriculares Bluetooth", price: 120, description: "Sonido envolvente y sin cables" },
  { _id: "3", name: "Monitor 4K", price: 799, description: "Ultra HD con colores vivos" }
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log("Servidor backend escuchando en http://localhost:5000");
});
