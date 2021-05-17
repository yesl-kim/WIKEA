import React, { Component } from 'react';
import Star from '../../../../../components/Star/Star.js';
import './PrimaryInfo.scss';

class PrimayInfo extends Component {
  render() {
    const { product } = this.props;

    return (
      <div className="item-primary-info">
        <strong>{product.is_new ? 'NEW' : ''}</strong>

        <h1>
          <span>
            {product.english_name}
            {product.korean_name}
          </span>
          <p>화초물뿌리개, 유리, 25 cl</p>
        </h1>
        <div className="price">W {Number(product.price).toLocaleString()}</div>
        <Star />
      </div>
    );
  }
}

export default PrimayInfo;
