// frontend/src/components/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext'; 
import './Cart.css'; 

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, getTotalItems, getTotalPrice } = useCart();

  return (
    <div className="cart-container">
      <h1>Tu Carrito</h1>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => {
            
            
            if (!item || typeof item.price === 'undefined' || item.price === null || typeof item.quantity === 'undefined' || item.quantity === null) {
              console.warn("Cart item received an invalid item or missing price/quantity:", item);
              return null; 
            }
            

           
            const formattedPrice = typeof item.price === 'number' ? item.price.toLocaleString('es-CO') : item.price;
            const itemTotalPrice = typeof item.price === 'number' && typeof item.quantity === 'number' ? (item.price * item.quantity).toLocaleString('es-CO') : 'N/A';


            return (
              <div key={item.id} className="cart-item">
                {item.image && <img src={item.image} alt={item.name} className="cart-item-image" />}
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>Precio unitario: ${formattedPrice}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Total por ítem: ${itemTotalPrice}</p>
                  <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
              </div>
            );
          })}
          <div classNameN="cart-summary">
            <h3>Total de ítems: {getTotalItems()}</h3>
            <h3>Total a pagar: ${getTotalPrice().toLocaleString('es-CO')}</h3>
            <button onClick={clearCart}>Vaciar Carrito</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
