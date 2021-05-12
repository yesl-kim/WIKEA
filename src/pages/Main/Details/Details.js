import React from 'react';
import Message from '../../../components/Header/Message';
import Header from '../../../components/Header/Header';
import Main from './Main/Main.js';
import './Details.scss';
import ImgModal from './Modal/ImgModal';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      modalOn: false,
      isLiked: false,
    };
  }

  handleModal = () => {
    const { modalOn } = this.state;
    this.setState({
      modalOn: !modalOn,
    });
  };

  popUpLiked = e => {
    const { isLiked } = this.state;
    this.setState({
      isLiked: !isLiked,
    });
    console.log('clicked');
  };

  render() {
    const { modalOn, isLiked } = this.state;
    return (
      <>
        <Message />
        <Header />
        <Main handleModal={this.handleModal} popUpLiked={this.popUpLiked} />
        {modalOn && <ImgModal handleModal={this.handleModal} />}
        {isLiked && <div></div>}
      </>
    );
  }
}

export default Details;
