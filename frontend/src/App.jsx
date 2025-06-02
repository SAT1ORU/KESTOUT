import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Categories from './components/Categories';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Contact from './components/Contact';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<Categories />} />
          <Route path="/productos" element={<ProductList />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/contactanos" element={<Contact />} /> 
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
