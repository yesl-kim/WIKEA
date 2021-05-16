import React from 'react';
import './Product.scss';

class Product extends React.Component {
  render() {
    // const { item } = this.props;

    return (
      <div className="product item">
        {/* children으로 구멍뚫어 놓기(input checkbox) */}
        <input type="checkbox" />
        <button>
          <i className="ic-heart" />
        </button>
        <img
          alt="제품이미지"
          src="https://www.ikea.com/kr/ko/images/product/arstid-…ble-lamp-brass-white__0880725_pe617347_s5.jpg?f=m"
        />
        <div className="product_explanation">
          <h2 className="produc_name">
            <span>멋있는 램프</span>
          </h2>
          <div className="product_size">탁상스탠드</div>
          <div className="product_price">
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
