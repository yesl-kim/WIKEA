/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Label from '../Label/Label';
import './NewProduct.scss';

class NewProduct extends Component {
  render() {
    const { bgImage, items } = this.props;
    return (
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="new_product">
          <img alt={bgImage.alt} src={bgImage.src} />
          {items.map(item => (
            <Label key={item.id} product={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default NewProduct;
