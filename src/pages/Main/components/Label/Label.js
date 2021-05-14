/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Label.scss';

class Label extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className={`label_container ${product.id}`}>
        <button type="button" className="label_btn" />
        <Link to="/" className="label">
          <p className="product_info">
            {product.isNew && <span className="new">New</span>}
            <span className="name">{product.name}</span>
            <span className="category">{product.category}</span>
            <div className="price">
              <span className="won">￦</span>
              <span>{product.price.toLocaleString()}</span>
            </div>
          </p>
          <Link to="/" role="button">
            <i className="ic-chevron" />
          </Link>
        </Link>
      </div>
    );
  }
}

export default Label;
