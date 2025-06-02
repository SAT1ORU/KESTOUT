// frontend/src/components/ProductCard.jsx
import React from 'react';

import { useCart } from '../context/CartContext'; 
import './ProductCard.css'; 

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); 

  const formattedPrice = new Intl.NumberFormat('es-CO', { 
    style: 'currency',
    currency: 'COP', 
    minimumFractionDigits: 0, 
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
