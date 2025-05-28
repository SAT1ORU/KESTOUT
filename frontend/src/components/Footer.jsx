// frontend/src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Si tus enlaces de footer son de React Router
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content"> {/* Añadimos este div */}
        <p>&copy; {new Date().getFullYear()} KestOUT. Todos los derechos reservados.</p>
        <div className="footer-links">
          <Link to="/politica-privacidad">Política de Privacidad</Link>
          <Link to="/terminos-servicio">Términos de Servicio</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;