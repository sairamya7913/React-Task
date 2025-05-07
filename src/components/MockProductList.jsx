import React, { useState, useEffect } from 'react';

const MockProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map((item, index) => ({
          id: item.id,
          title: item.title,
          price: (index + 1) * 10,
        }));
        setProducts(mapped);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    console.log('Cart:', [...cart, product]);
  };

  if (loading) return <p>Loading mock products...</p>;

  return (
    <div className="mock-product-list">
      <h2>Mock API Product Cards</h2>
      <div className="mock-cards">
        {products.map((product) => (
          <div className="mock-card" key={product.id}>
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockProductList;
