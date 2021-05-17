import React, { Component } from 'react';
import './ImgSlider.scss';

class ImgSlider extends Component {
  constructor() {
    super();
    this.state = {
      imgRight: 0,
    };
  }

  goNext = () => {
    const { imgRight } = this.state;
    const { product } = this.props;
    const totalWidth = W * (product.url.length - 1);
    if (imgRight > -totalWidth) {
      this.setState({ imgRight: imgRight - W });
    }
  };

  goPrev = () => {
    const { imgRight } = this.state;
    if (imgRight < 0) {
      this.setState({ imgRight: imgRight + W });
    }
  };

  render() {
    const { imgRight } = this.state;
    const { product } = this.props;
    return (
      <div className="carousel-container">
        <div
          className="carousel-slide"
          style={{ transform: `translateX(${imgRight}px)` }}
        >
          {product &&
            product.url.map((url, idx) => {
              return <img key={idx} alt="test" src={url} />;
            })}
        </div>
        <button onClick={this.goPrev} className="prevBtn">
          <i className="ic-chevron" />
        </button>
        <button onClick={this.goNext} className="nextBtn">
          <i className="ic-chevron" />
        </button>
      </div>
    );
  }
}

export default ImgSlider;

const W = 450;
