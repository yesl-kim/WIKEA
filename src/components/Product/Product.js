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
    const { star } = this.props.product;
    const stars = new Array(Math.floor(Number(star))).fill(
      <i className="ic-star" />
    );

    if (star % 1 > 0) {
      stars.push(<i className="ic-cart" />);
    }

    return stars;
  };

  render() {
    const { product, classGrid, children } = this.props;

    const { favoriteBtn } = this.state;

    return (
      <div className={`product ${classGrid}`}>
        {children}
        <button className="product_favorite" onClick={this.handleFavoriteBtn}>
          <i className={favoriteBtn ? 'ic-heart isFavorite' : 'ic-heart'} />
        </button>
        <div className="product_images">
          <img alt={product.sub_category_name} src={product.url[0]} />
          <img alt={product.sub_category_name} src={product.url[1]} />
        </div>
        <div className="products_explanation">
          <div className="product_new">{product.is_new ? 'New' : ''}</div>
          <h2 className="product_name">
            <span>{`${product.en_name} ${product.ko_name}`}</span>
          </h2>
          <div className="product_category">{product.sub_category_name}</div>
          <div className="product_price">
            <span>₩</span>
            {Math.floor(product.price).toLocaleString()}
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
