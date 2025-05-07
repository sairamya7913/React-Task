import React from 'react';

import './App.css';
import CartProvider from './components/CartProvider';
import CategoryCarousel from './components/CategoryCarousel';
import ContextProductList from './components/ContextProductList';
import Footer from './components/Footer';
import MockProductList from './components/MockProductList';
import Navbar from './components/Navbar';
import ProductSection from './components/ProductSection';

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <CategoryCarousel />
        <ProductSection />
        <MockProductList />
        <CartProvider>
          <ContextProductList />
        </CartProvider>
      </main>
      
      <Footer />

    </div>
  );
}

export default App;
