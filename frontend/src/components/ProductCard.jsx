// frontend/src/components/ProductCard.jsx
import React from 'react';
// Asegúrate de que importas useCart así:
import { useCart } from '../context/CartContext'; // <--- VERIFICA ESTA LÍNEA
import './ProductCard.css'; // Asumo que tienes un CSS para ProductCard, si no, es App.css

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Usa el hook aquí

  const formattedPrice = new Intl.NumberFormat('es-CO', { // 'es-CO' para formato colombiano
    style: 'currency',
    currency: 'COP', // Peso Colombiano
    minimumFractionDigits: 0, // Sin decimales para miles
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p className="product-price">{formattedPrice}</p>
      <button onClick={() => addToCart(product)} className="add-to-cart-btn">
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductCard;