import React from 'react';

class Product extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <div className="product">
        {/* children으로 구멍뚫어 놓기(input checkbox) */}
        <input type="checkbox" />
        <button>
          <i className="ic-heart" />
        </button>
        <img
          src={
            'https://www.ikea.com/kr/ko/images/products/arstid-…ble-lamp-brass-white__0880725_pe617347_s5.jpg?f=m'
          }
        />
        <div className="productsExplanation">
          <h2 className="productName">
            <span>멋있는 램프</span>
          </h2>
          <div className="productSize">탁상스탠드</div>
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
