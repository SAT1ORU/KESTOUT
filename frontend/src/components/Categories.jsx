// frontend/src/components/Categories.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css'; 
import './Categories.css'; 

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/categorias');
        setCategories(response.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError("No se pudieron cargar las categorías. Intenta de nuevo más tarde.");
        // Fallback a categorías estáticas si hay un error con el backend
        setCategories([
          { id: 1, name: "Auriculares", image: "categoria_auriculares.jpg" },
          { id: 2, name: "Teclados", image: "categoria_teclados.jpg" },
          { id: 3, name: "Mouses", image: "categoria_mouses.jpg" },
          { id: 4, name: "Monitores", image: "categoria_monitores.jpg" },
          { id: 5, name: "Webcams", image: "categoria_webcams.jpg" },
          { id: 6, name: "Almacenamiento", image: "categoria_almacenamiento.jpg" },
          { id: 7, name: "Redes", image: "categoria_redes.jpg" },
          { id: 8, name: "Tarjetas Gráficas", image: "categoria_tarjetas_graficas.jpg" },
          { id: 9, name: "Sillas Gamer", image: "categoria_sillas_gamer.jpg" },
          { id: 10, name: "Micrófonos", image: "categoria_microfonos.jpg" },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div className="categories-container"><p>Cargando categorías...</p></div>;
  }

  if (error) {
    return <div className="categories-container"><p className="error-message">{error}</p></div>;
  }

  return (
    <div className="categories-container">
      <h1>Categorías de Productos</h1>
      <p className="categories-intro">Explora nuestra amplia gama de productos por categoría.</p>
      <div className="category-grid">
        {categories.map(category => (
          <Link to={`/productos?categoria=${category.name}`} key={category.id} className="category-card">
            {}
            {category.image && <img src={`/img/${category.image}`} alt={category.name} className="category-image" />}
            {}
            {!category.image && <div className="category-image-placeholder">{category.name}</div>}
            <h3>{category.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
