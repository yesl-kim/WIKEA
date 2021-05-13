import React from 'react';
import Message from '../../../components/Header/Message';
import Header from '../../../components/Header/Header';
import Main from './Main/Main.js';
import ImgModal from './Modal/ImgModal';
import './Details.scss';
import ImgSlider from './Modal/ImgSlider';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      modalOn: false,
      isLiked: false,
      imgRight: 0,
    };
  }

  handleModal = () => {
    const { modalOn } = this.state;
    this.setState({
      modalOn: !modalOn,
    });
  };

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
    const { modalOn, isLiked, imgRight } = this.state;
    return (
      <>
        <Message />
        <Header />
        {/* <Main
          handleModal={this.handleModal}
          isLiked={isLiked}
          popUpLiked={this.popUpLiked}
        />
        {modalOn && <ImgModal handleModal={this.handleModal} />} */}
        <ImgSlider right={imgRight} goNext={this.goNext} goPrev={this.goPrev} />
      </>
    );
  }
}

export default Details;

const W = 450;
