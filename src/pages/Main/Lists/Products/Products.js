/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Product from './Product/Product';

import './Products.scss';

class Products extends React.Component {
  render() {
    return (
      <div className="products">
        <div className="productRow">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    );
  }
}

export default Products;
