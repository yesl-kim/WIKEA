import React from 'react';
import './Product.scss';

class Product extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { name, category, price, isFavorite, rating, img } = this.props;

    return (
      <div className="product">
        {this.props.children}
        <button className="product_favorite">
          <i className="ic-heart" />
        </button>
        <img alt="lamp" src={img} />
        <div className="products_explanation">
          <h2 className="produc_name">
            <span>{name}</span>
          </h2>
          <div className="product_size">{category}</div>
          <div className="product_price">
            <span>₩</span>
            {price}
          </div>
          <div className="product_rating">
            <i className="ic-star" />
            <i className="ic-star" />
            <i className="ic-star" />
            <i className="ic-star" />
          </div>
          <button className="product_shopping">
            <i className="ic-cart" />
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
