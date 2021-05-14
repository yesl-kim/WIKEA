import React, { Component } from 'react';
import './ItemImg.scss';

class ItemImg extends Component {
  render() {
    const { handleModal, products } = this.props;

    return (
      <div>
        <div className="item-img">
          {!!products.length &&
            products[0].url.map((s, idx) => (
              <img
                key={idx}
                onClick={handleModal}
                className="lg-only"
                alt="상품이미지"
                src={s}
              />
            ))}

          <img
            className="lg-only"
            alt="상품이미지"
            src="https://www.ikea.com/kr/ko/images/products/sesamfroen-plant-mister-clear-glass__0958896_pe809495_s5.jpg?f=xl"
          />
        </div>
        <div className="sm-slide lg-hidden"></div>
      </div>
    );
  }
}

export default ItemImg;
