import React, { Component } from 'react';
import './ItemImg.scss';

class ItemImg extends Component {
  render() {
    const { handleModal, product } = this.props;
    return (
      <div>
        <div className="item-img">
          {!!product.url &&
            product.url.map(url => (
              <img key={url} onClick={handleModal} alt="상품이미지" src={url} />
            ))}
        </div>
        <div className="sm-slide lg-hidden"></div>
      </div>
    );
  }
}

export default ItemImg;
