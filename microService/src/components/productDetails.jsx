import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch specific product data
    axios.get(`/api/products/${productId}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error('Error fetching product details:', error));
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
    <h1>Product Detail</h1>
    <ul>
      <li>Name: {product.name}</li>
      <li>Company: {product.company}</li>
      <li>Category: {product.category}</li>
      <li>Price: {product.price}</li>
      <li>Rating: {product.rating}</li>
      <li>Discount: {product.discount}</li>
      <li>Availability: {product.availability}</li>
    </ul>
  </div>
  );
}

export default ProductDetails;
