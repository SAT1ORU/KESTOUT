// backend/data/products.js
const products = [
  {
    id: 1,
    name: "Auriculares Gamer RGB HyperX",
    price: 149000,
    image: "/img/auriculares.jpg",
    brand: "HyperX" // <--- AÑADIR ESTA PROPIEDAD
  },
  {
    id: 2,
    name: "Teclado Mecánico RGB Corsair K95",
    price: 189000,
    image: "/img/teclado.jpg",
    brand: "Corsair" // <--- AÑADIR ESTA PROPIEDAD
  },
  {
    id: 3,
    name: "Mouse Gamer 7200DPI Logitech G502",
    price: 99000,
    image: "/img/mouse.jpg",
    brand: "Logitech" // <--- AÑADIR ESTA PROPIEDAD
  },
  {
    id: 4,
    name: "Monitor Curvo 27' Samsung Odyssey G7",
    price: 1800000,
    image: "/img/monitor.jpg",
    brand: "Samsung" // <--- AÑADIR ESTA PROPIEDAD
  },
  {
    id: 5,
    name: "Webcam Logitech C920 HD",
    price: 350000,
    image: "/img/webcam.jpg",
    brand: "Logitech" // <--- AÑADIR ESTA PROPIEDAD
  },
  {
    id: 6,
    name: "Disco Duro Externo 1TB Seagate",
    price: 280000,
    image: "/img/disco_duro.jpg",
    brand: "Seagate" // <--- AÑADIR ESTA PROPIEDAD
  },
  {
    id: 7,
    name: "Router Wi-Fi 6 TP-Link AX1500",
    price: 420000,
    image: "/img/router.jpg",
    brand: "TP-Link" // <--- AÑADIR ESTA PROPIEDAD
  },
  {
    id: 8,
    name: "Tarjeta Gráfica NVIDIA RTX 4070",
    price: 4500000,
    image: "/img/gpu.jpg",
    brand: "NVIDIA" // <--- AÑADIR ESTA PROPIEDAD
  },
  {
    id: 9,
    name: "Silla Gamer Ergonómica",
    price: 750000,
    image: "/img/silla_gamer.jpg",
    brand: "ErgoChair" // <--- AÑADIR ESTA PROPIEDAD (o la marca que desees)
  },
  {
    id: 10,
    name: "Micrófono USB Blue Yeti",
    price: 520000,
    image: "/img/microfono.jpg",
    brand: "Blue" // <--- AÑADIR ESTA PROPIEDAD
  }
];

module.exports = products;