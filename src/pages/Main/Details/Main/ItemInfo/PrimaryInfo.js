import React, { Component } from 'react';
import Rate from '../../../../../components/Rate/Rate';
import './PrimaryInfo.scss';

class PrimayInfo extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="item-primary-info">
        <strong>{product.is_new && 'NEW'}</strong>

        <h1>
          <span className="item-name">
            {product.english_name}
            {product.korean_name}
          </span>
          <p className="desc">화초물뿌리개, 유리, 25 cl</p>
        </h1>
        <div className="price">
          ₩ {product.price && product.price.toLocaleString()}
        </div>
        <Rate rate={product.star} />
      </div>
    );
  }
}

export default PrimayInfo;
