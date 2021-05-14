import React from 'react';
import './Product.scss';

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      img: props.img,
    };
  }

  render() {
    const {
      name,
      category,
      price,
      isFavorite,
      rating,
      img,
      classGrid,
      children,
    } = this.props;

    return (
      <div className={`product ${classGrid}`}>
        {children}
        <button className="product_favorite">
          <i className="ic-heart" />
        </button>
        <img
          alt={category}
          src={img[0]}
          onMouseOver={e => img[1] && (e.currentTarget.src = img[1])}
          onMouseOut={e => (e.currentTarget.src = img[0])}
        />
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
