// frontend/src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Header.css';
// --- INICIO IMPORTACIÓN DEL LOGO ---
import KestOUTLogo from '../assets/kestout_logo.png'; 
// --- FIN IMPORTACIÓN DEL LOGO ---

const Header = () => {
  const { getTotalItems } = useCart();

  return (
    <header className="main-header">
      <div className="header-content">
        <Link to="/" className="site-logo">
          {/* USAR EL LOGO IMPORTADO */}
          <img src={KestOUTLogo} alt="KestOUT Logo" className="logo-img" />
        </Link>
        <nav className="main-nav">
          <ul>
            {/* AÑADIR LA PESTAÑA HOME */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/categorias">Categorías</Link></li>
            <li><Link to="/contactanos">Contáctenos</Link></li>
            <li>
              <Link to="/carrito" className="cart-link">
                <FontAwesomeIcon icon={faShoppingCart} /> Carrito ({getTotalItems()})
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
