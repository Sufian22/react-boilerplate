import React from 'react';
import Product from '../Product/Product';
import './ProductList.css';

const ProductList = ({ products }) => (
  <div className="productList">
    {products.map((product, index) => (
      <Product
        key={index}
        name={product.name}
        desc={product.description}
        price={product.price}
      />
    ))}
  </div>
);

export default ProductList;
