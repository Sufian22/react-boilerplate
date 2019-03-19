import React from 'react';
import './Product.css';

const Product = ({ name, desc, price }) => (
  <div className="product">
    <div className="info">
      <p className="name">{name}</p>
      <p className="description">{desc}</p>
      <div className="price">{price} $</div>
    </div>
  </div>
);

export default Product;
