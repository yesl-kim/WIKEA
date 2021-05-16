import React, { Component } from 'react';
import './ItemImg.scss';

class ItemImg extends Component {
  render() {
    const { handleModal, details } = this.props;
    return (
      <div>
        <div className="item-img">
          {!!details.url &&
            details.url.map((s, idx) => (
              <img
                key={idx}
                onClick={handleModal}
                // className="lg-only"
                alt="상품이미지"
                src={s}
              />
            ))}
        </div>
        <div className="sm-slide lg-hidden"></div>
      </div>
    );
  }
}

export default ItemImg;
