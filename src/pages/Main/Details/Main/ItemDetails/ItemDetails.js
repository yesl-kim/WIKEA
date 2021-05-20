import React, { Component } from 'react';
import Rate from '../../../../../components/Rate/Rate';
import './ItemDetails.scss';

class ItemDetails extends Component {
  render() {
    const { product, handleSideModal } = this.props;
    return (
      <div className="item-details">
        <div className="item-summary">
          <span className="title">제품 번호</span>
          <span className="content">{product && product.id}</span>
        </div>
        <hr />
        <button onClick={handleSideModal} className="item-information box">
          <span className="title">제품 설명</span>
          <i className="ic-chevron" />
        </button>
        <hr />
        <button className="item-size box">
          <span className="title">제품 크기</span>
          <i className="ic-chevron" />
        </button>
        <hr />
        <button className="item-rating box">
          <span className="title">상품평</span>
          <i className="ic-chevron" />
          <Rate rate={product.star} />
        </button>
        <hr />
      </div>
    );
  }
}
export default ItemDetails;
