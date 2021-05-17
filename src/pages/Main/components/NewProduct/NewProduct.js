/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Label from '../Label/Label';
import './NewProduct.scss';

class NewProduct extends Component {
  render() {
    const { section } = this.props;
    return (
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="new_product">
          <img alt={section.alt} src={section.src} />
          {section.products.map(product => (
            <Label key={product.id} number={section.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default NewProduct;
