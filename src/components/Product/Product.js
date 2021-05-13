import React from 'react';
import './Product.scss';

class Product extends React.Component {
  render() {
    // const { item } = this.props;

    return (
      <div className="product">
        {/* children으로 구멍뚫어 놓기(input checkbox) */}
        {this.props.children}
        <button className="product_favorite">
          <i className="ic-heart" />
        </button>
        <img
          alt="lamp"
          src="https://www.ikea.com/kr/ko/images/products/arstid-…ble-lamp-brass-white__0880725_pe617347_s5.jpg?f=m"
        />
        <div className="products_explanation">
          <h2 className="produc_name">
            <span>멋있는 램프</span>
          </h2>
          <div className="product_size">탁상스탠드</div>
          <div className="product_price">
            <span>₩</span>5,000
          </div>
          <div className="product_rating">
            <i className="ic-star" />
            <i className="ic-star" />
            <i className="ic-star" />
            <i className="ic-star" />
          </div>
          <button className="product_shopping">
            <i className="ic-cart" />
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
