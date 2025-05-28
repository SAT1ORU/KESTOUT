import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from './context/CartContext'; // Importa el CartProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider> {/* Envuelve tu App con CartProvider */}
      <App />
    </CartProvider>
  </React.StrictMode>
);