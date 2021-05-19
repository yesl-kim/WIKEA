import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Label.scss';

class Label extends Component {
  render() {
    const { number, product } = this.props;
    return (
      <div className={`label_container new${number}_${product.id}`}>
        <button type="button" className="label_btn" />
        <Link to="/" className="label">
          <p className="product_info">
            {product.is_new && <span className="new">New</span>}
            <span className="name">{product.korean_name}</span>
            <span className="category">{product.sub_category}</span>
            <div className="price">
              <span className="won">￦</span>
              <span>{Number(product.price).toLocaleString('ko-KR')}</span>
            </div>
          </p>
          <Link to="/" role="button">
            <i className="ic-chevron" />
          </Link>
        </Link>
      </div>
    );
  }
}

export default Label;
