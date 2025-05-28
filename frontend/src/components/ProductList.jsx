// frontend/src/components/ProductList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import '../App.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [originalProducts, setOriginalProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/productos')
      .then(response => {
        setProducts(response.data);
        setOriginalProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);

    let sorted = [...products];

    if (selectedOption === 'price-asc') {
      sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (selectedOption === 'price-desc') {
      sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (selectedOption === 'brand-asc') {
      sorted.sort((a, b) => {
        // Asegúrate de que los productos tengan una propiedad 'brand'
        // Si 'brand' es undefined, trátalo como una cadena vacía para la comparación
        const brandA = a.brand ? a.brand.toLowerCase() : '';
        const brandB = b.brand ? b.brand.toLowerCase() : '';
        return brandA.localeCompare(brandB);
      });
    } else if (selectedOption === 'brand-desc') {
      sorted.sort((a, b) => {
        const brandA = a.brand ? a.brand.toLowerCase() : '';
        const brandB = b.brand ? b.brand.toLowerCase() : '';
        return brandB.localeCompare(brandA);
      });
    } else {
      sorted = [...originalProducts];
    }
    setProducts(sorted);
  };

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h1>Productos disponibles:</h1>
        <div className="sort-controls">
          <label htmlFor="sort-select">Ordenar por:</label>
          <select id="sort-select" value={sortOption} onChange={handleSortChange}>
            <option value="">Predeterminado</option>
            <option value="price-asc">Precio (Menor a Mayor)</option>
            <option value="price-desc">Precio (Mayor a Menor)</option>
            <option value="brand-asc">Marca (A-Z)</option>
            <option value="brand-desc">Marca (Z-A)</option>
          </select>
        </div>
      </div>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;