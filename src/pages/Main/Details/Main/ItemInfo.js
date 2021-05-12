import React, { Component } from 'react';
import './ItemInfo.scss';
import Star from './Star';

class ItemInfo extends Component {
  render() {
    return (
      <div className="item-info sticky">
        <div className="item-primary-info">
          <strong>NEW</strong>
          <h1>
            <span>SESAMFRÖN 세삼프뢴</span>
            <p>화초물뿌리개, 유리, 25 cl</p>
          </h1>
          <div className="price">W 4,900</div>
          <Star />
        </div>
        <div className="item-btn-group">
          <button>구매하기</button>
          <button>
            <i className="ic-heart" aria-label="위시리스트에 추가" />
          </button>
        </div>
        <div className="item-availability">
          <div className="stock-check">
            <i className="ic-cart1" />
            <span>배송 여부는 결제 단계에서 확인하실 수 있습니다.</span>
          </div>
          <hr />
          <div className="stock-check">
            <i className="ic-store" />
            <a href="/">매장 재고 및 재입고 날짜 확인</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemInfo;
