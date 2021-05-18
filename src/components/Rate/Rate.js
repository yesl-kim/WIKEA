import React from 'react';

class Rate extends React.Component {
  totalRating = () => {
    const { rate } = this.props;
    const stars = new Array(Math.floor(Number(rate))).fill(
      <i className="ic-star" />
    );
    if (rate % 1 > 0) {
      stars.push(<i className="ic-cart" />);
    }
    return stars;
  };

  render() {
    return <div className="product_rating">{this.totalRating()}</div>;
  }
}

export default Rate;
