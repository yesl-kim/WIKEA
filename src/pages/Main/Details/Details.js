import React from 'react';
import './Details.scss';
import ImgSlider from './Modal/ImgSlider';

class Details extends React.Component {
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
      <>
        <ImgSlider right={imgRight} goNext={this.goNext} goPrev={this.goPrev} />
      </>
    );
  }
}

export default Details;

const W = 450;
