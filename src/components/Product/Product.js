import React from 'react';
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

  totalRating = () => {
    const { rating } = this.props;
    const ratingIcons = [];

    for (let i = 0; i <= this.props.rating - 1; i++) {
      ratingIcons.push(<i className="ic-star" />);
    }
    if (rating % 1 > 0) {
      ratingIcons.push(<i className="ic-cart" />);
    }

    return ratingIcons;
  };
  // newArray(rating).fill활용하여 수정하기

  render() {
    const { koName, enName, category, price, isNew, img, classGrid, children } =
      this.props;
    const { favoriteBtn } = this.state;

    return (
      <div className={`product ${classGrid}`}>
        {children}
        <button className="product_favorite" onClick={this.handleFavoriteBtn}>
          <i className={favoriteBtn ? 'ic-heart isFavorite' : 'ic-heart'} />
        </button>
        <div className="product_images">
          <img alt={category} src={img[0]} />
          <img alt={category} src={img[1]} />
        </div>
        <div className="products_explanation">
          <div className="product_new">{isNew ? 'New' : ''}</div>
          <h2 className="product_name">
            <span>{enName + koName}</span>
          </h2>
          <div className="product_size">{category}</div>
          <div className="product_price">
            <span>₩</span>
            {price}
          </div>
          <div className="product_rating">{this.totalRating()}</div>
          <button className="product_shopping">
            <i className="ic-cart" />
          </button>
        </div>
      </div>
    );
  }
}

export default Product;

// 저작권, 함수, 리펙토링, 문서화 수정
