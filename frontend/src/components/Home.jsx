// frontend/src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Vamos a crear este CSS

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Bienvenido a KestOUT</h1>
        <p>Tu destino final para equipos gamer de alto rendimiento.</p>
        <Link to="/productos" className="cta-button">Explora nuestros Productos</Link>
      </section>

      <section className="featured-categories">
        <h2>Categorías Destacadas</h2>
        <div className="categories-grid">
          {/* Puedes hacer esto dinámico si lo deseas, o estático como ejemplo */}
          <Link to="/productos?categoria=Auriculares" className="category-card-home">
            <img src="/img/categoria_auriculares.jpg" alt="Auriculares" />
            <h3>Auriculares</h3>
          </Link>
          <Link to="/productos?categoria=Teclados" className="category-card-home">
            <img src="/img/categoria_teclados.jpg" alt="Teclados" />
            <h3>Teclados</h3>
          </Link>
          <Link to="/productos?categoria=Mouses" className="category-card-home">
            <img src="/img/categoria_mouses.jpg" alt="Mouses" />
            <h3>Mouses</h3>
          </Link>
          <Link to="/productos?categoria=Monitores" className="category-card-home">
            <img src="/img/categoria_monitores.jpg" alt="Monitores" />
            <h3>Monitores</h3>
          </Link>
        </div>
        <Link to="/categorias" className="view-all-button">Ver todas las Categorías</Link>
      </section>

      <section className="about-us-preview">
        <h2>¿Quiénes Somos?</h2>
        <p>
          En KestOUT, nos apasiona brindarte la mejor tecnología gamer.
          Desde periféricos hasta componentes de alto nivel, tenemos todo lo que necesitas para llevar tu experiencia de juego al siguiente nivel.
        </p>
        <Link to="/contactanos" className="learn-more-button">Contáctanos</Link>
      </section>
    </div>
  );
};

export default Home;