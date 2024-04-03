import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the API
    axios.get('https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-lookup-product')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
    <h1>Products</h1>
    <ul>
      {products.map((product) => (
        <li key={product.id}>
            <Link to={`/products/${product.id}`}>
            {product.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
  );
}

export default ProductList;
