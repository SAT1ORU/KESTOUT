// frontend/src/components/ProductList.jsx (o similar)
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom'; 
import ProductCard from './ProductCard'; 
import './ProductList.css'; 

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation(); 

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        // Obtener el parámetro 'categoria' de la URL
        const params = new URLSearchParams(location.search);
        const categoryFilter = params.get('categoria');

        // Construir la URL de la API dinámicamente
        let apiUrl = 'http://localhost:3001/api/productos';
        if (categoryFilter) {
          apiUrl += `?categoria=${encodeURIComponent(categoryFilter)}`;
        }

        const response = await axios.get(apiUrl);
        setProducts(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("No se pudieron cargar los productos. Intenta de nuevo más tarde.");
        setProducts([]); 
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [location.search]);

  if (loading) {
    return <div className="product-list-container"><p>Cargando productos...</p></div>;
  }

  if (error) {
    return <div className="product-list-container"><p className="error-message">{error}</p></div>;
  }

  if (products.length === 0) {
    return <div className="product-list-container"><p>No se encontraron productos para esta categoría.</p></div>;
  }

  return (
    <div className="product-list-container">
      <h1>{location.search ? `Productos de ${new URLSearchParams(location.search).get('categoria')}` : 'Todos nuestros productos'}</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
