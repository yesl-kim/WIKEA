/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Product.scss';

class Product extends React.Component {
  render() {
    return (
      <div className="product item">
        <img src="https://www.ikea.com/kr/ko/images/products/arstid-…ble-lamp-brass-white__0880725_pe617347_s5.jpg?f=m" />
        <div className="productsExplanation">
          <h2>
            <span>멋있는 램프</span>
          </h2>
          <div className="productSize">탁상스탠드, 29 cm</div>
          <div className="productPrice">
            <span>₩</span>5,000
          </div>
          <div>
            <i className="ic-star" />
            <i className="ic-star" />
            <i className="ic-star" />
            <i className="ic-star" />
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
