/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './NewProduct.scss';

class NewProduct extends Component {
  render() {
    const { bgImage } = this.props;
    return (
      <div className="col-lg-6 col-md-6">
        <div className="new_product">
          <img alt={bgImage.alt} src={bgImage.src} />
          <div className="label_container">
            <button type="button" className="label_btn" />
            <a className="label">
              <div className="product_info">
                <span className="new">new</span>
                <span className="title">복슬리브</span>
                <span className="category">조명</span>
                <div className="price">
                  <span className="won">￦</span>
                  <span>99,900</span>
                </div>
              </div>
              <a role="button">
                <i className="ic-chevron"></i>
              </a>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewProduct;
