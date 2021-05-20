import React from 'react';

class Rate extends React.Component {
  totalRating = () => {
    const { rate } = this.props;
    const stars = new Array(Math.floor(Number(rate))).fill(
      <i className="ic-star" />
    );
    if (rate % 1 > 0) {
      stars.push(<i className="ic-heart" />);
    }
    return stars;
  };

  render() {
    const { rate } = this.props;
    return rate ? (
      <div className="product_rating">{this.totalRating()}</div>
    ) : null;
  }
}

export default Rate;
