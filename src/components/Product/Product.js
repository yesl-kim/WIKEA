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

    const { favoriteBtn } = this.state;

    const totalRating = () => {
      const ratingIcons = [];
      for (let i = 0; i <= this.props.rating - 1; i++) {
        ratingIcons.push(<i key={i} className="ic-star" />);
      }
      if (rating % 1 > 0) {
        ratingIcons.push(<i className="ic-cart" />);
      }

      return ratingIcons;
    };

    return (
      <div className={`product ${classGrid}`}>
        {children}
        <button className="product_favorite" onClick={this.handleFavoriteBtn}>
          <i className={`ic-heart ${favoriteBtn}`} />
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
          <div className="product_rating">{totalRating()}</div>
          <button className="product_shopping">
            <i className="ic-cart" />
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
