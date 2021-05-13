import React, { Component } from 'react';

class ImgSlider extends Component {
  render() {
    const { right, goNext, goPrev } = this.props;
    return (
      <div class="carousel-container">
        <div
          class="carousel-slide"
          style={{ transform: `translateX(${right}px)` }}
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
        <button onClick={goPrev} className="prevBtn">
          <i className="ic-chevron" />
        </button>
        <button onClick={goNext} className="nextBtn">
          <i className="ic-chevron" />
        </button>
      </div>
    );
  }
}

export default ImgSlider;
