import React, { useState } from 'react';

import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    title: 'Product 1',
    price: 29.99,
    imgSrc: '',
  },
  {
    id: 2,
    title: 'Product 2',
    price: 39.99,
    imgSrc: '',
  },
  {
    id: 3,
    title: 'Product 3',
    price: 49.99,
    imgSrc: '',
  },
  {
    id: 4,
    title: 'Product 4',
    price: 59.99,
    imgSrc: '',
  },
];

const ProductSection = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    console.log('Cart:', cart);
  };

  return (
    <div className="product-section">
      <h2>Our Products</h2>
      <div className="product-cards">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
