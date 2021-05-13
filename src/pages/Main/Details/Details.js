import React from 'react';
import Message from '../../../components/Header/Message';
import Header from '../../../components/Header/Header';
import Main from './Main/Main.js';
import ImgModal from './Modal/ImgModal';
import './Details.scss';

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
        <Main
          handleModal={this.handleModal}
          isLiked={isLiked}
          popUpLiked={this.popUpLiked}
        />
        {modalOn && (
          <ImgModal
            right={imgRight}
            goPrev={this.goPrev}
            goNext={this.goNext}
            handleModal={this.handleModal}
          />
        )}
      </>
    );
  }
}

export default Details;

const W = 450;
