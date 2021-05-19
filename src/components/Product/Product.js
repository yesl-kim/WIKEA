import React from 'react';
import { Link } from 'react-router-dom';
import Rate from '../Rate/Rate';
import './Product.scss';

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      favoriteBtn: false,
    };
  }

  handleFavoriteBtn = () => {
    const { favoriteBtn } = this.state;

    this.setState({
      favoriteBtn: !favoriteBtn,
    });
  };

  render() {
    const { product, children } = this.props;
    const { favoriteBtn } = this.state;

    return (
      <Link to={`/details/${product.sub_category_url}/${product.id}`}>
        <div className={`product`}>
          {children}
          <button className="product_favorite" onClick={this.handleFavoriteBtn}>
            <i className={favoriteBtn ? 'ic-heart isFavorite' : 'ic-heart'} />
          </button>
          <div className="product_images">
            <img alt={product.korean_name} src={product.image} />
            <img alt={product.korean_name} src={product.background_image} />
          </div>
          <div className="products_explanation">
            <div className="product_new">{product.is_new ? 'New' : ''}</div>
            <h2 className="product_name">
              <span>{`${product.english_name} ${product.korean_name}`}</span>
            </h2>
            <div className="product_category">{product.sub_category_name}</div>
            <div className="product_price">
              <span>₩</span>
              {Math.floor(product.price).toLocaleString()}
            </div>
            <Rate rate={product.star} />
            <button className="product_shopping">
              <i className="ic-cart" />
            </button>
          </div>
        </div>
      </Link>
    );
  }
}

export default Product;
