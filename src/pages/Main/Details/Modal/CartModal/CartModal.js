import React, { Component } from 'react';
import './CartModal.scss';

class CartModal extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="cart_modal">
        <h2 className="cart_message">
          {product.english_name}
          {product.korean_name}제품이 장바구니에 추가되었습니다.
        </h2>
        <div className="link">장바구니로 가기</div>
      </div>
    );
  }
}

export default CartModal;
