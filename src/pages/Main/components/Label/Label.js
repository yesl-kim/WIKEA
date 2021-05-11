/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './Label.scss';

class Label extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className={`label_container ${product.id}`}>
        <button type="button" className="label_btn" />
        <a className="label">
          <div className="product_info">
            <span className="new">New</span>
            <span className="name">{product.name}</span>
            <span className="category">{product.category}</span>
            <div className="price">
              <span className="won">￦</span>
              <span>{product.price.toLocaleString()}</span>
            </div>
          </div>
          <a role="button">
            <i className="ic-chevron"></i>
          </a>
        </a>
      </div>
    );
  }
}

export default Label;
