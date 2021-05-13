import React from 'react';
import './Products.scss';

class Products extends React.Component {
  render() {
    return (
      <ul className="products">
        <li className="product_row">{this.props.children}</li>
      </ul>
    );
  }
}

export default Products;
