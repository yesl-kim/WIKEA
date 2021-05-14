import React, { Component } from 'react';

class ImgSlider extends Component {
  constructor() {
    super();
    this.state = {
      imgRight: 0,
    };
  }

  //조건 : '이미지 개수 * W'로 나중에 수정하기!

  goNext = () => {
    const { imgRight } = this.state;
    if (imgRight > -2250) {
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
    return (
      <div className="carousel-container">
        <div
          className="carousel-slide"
          style={{ transform: `translateX(${imgRight}px)` }}
        >
          <img
            alt="test"
            src="https://www.ikea.com/kr/ko/images/products/socker-greenhouse-white__0635683_pe697307_s5.jpg?f=xx"
          />
          <img
            alt="test"
            src="https://www.ikea.com/kr/ko/images/products/arstid-…ble-lamp-brass-white__0880725_pe617347_s5.jpg?f=m"
          />
          <img
            alt="test"
            src="https://www.ikea.com/kr/ko/images/products/socker-greenhouse-white__0635683_pe697307_s5.jpg?f=xx"
          />
          <img
            alt="test"
            src="https://www.ikea.com/kr/ko/images/products/arstid-…ble-lamp-brass-white__0880725_pe617347_s5.jpg?f=m"
          />
          <img
            alt="test"
            src="https://www.ikea.com/kr/ko/images/products/arstid-…ble-lamp-brass-white__0880725_pe617347_s5.jpg?f=m"
          />
          <img
            alt="test"
            src="https://www.ikea.com/kr/ko/images/products/arstid-…ble-lamp-brass-white__0880725_pe617347_s5.jpg?f=m"
            id="firstClone"
          />
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
