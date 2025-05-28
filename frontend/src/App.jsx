// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Footer from './components/Footer'; 
import { CartProvider } from './context/CartContext';

import Contact from './components/Contact';
import Categories from './components/Categories';
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<ProductList />} />
              <Route path="/carrito" element={<Cart />} />
              <Route path="/contactanos" element={<Contact />} />
              <Route path="/categorias" element={<Categories />} />
            </Routes>
          </main>
          {}
          <Footer /> {}
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
