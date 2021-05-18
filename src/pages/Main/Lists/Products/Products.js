import React from 'react';
import Product from '../../../../components/Product/Product';
import './Products.scss';

class Products extends React.Component {
  render() {
    const { products } = this.props;

    return (
      <ul className="products row">
        {products.map(product => (
          <li className="col-lg-3 col-md-4">
            <Product product={product}>
              <input type="checkbox" />
            </Product>
          </li>
        ))}
      </ul>
    );
  }
}

export default Products;
