import React, { useContext, useEffect, useState } from 'react';

import { CartContext } from './CartProvider';

const ContextProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item, i) => ({
          id: item.id,
          title: item.title,
          price: (i + 1) * 15,
        }));
        setProducts(formatted);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products from API...</p>;

  return (
    <div className="context-product-list">
      <h2>Products (Context API)</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContextProductList;
