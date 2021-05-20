import React, { Component } from 'react';
import './CartModal.scss';

class CartModal extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="cart_modal">
        {product.english_name}
        {product.korean_name}
        장바구니에 추가되었습니다.
      </div>
    );
  }
}

export default CartModal;
