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
    };
  }

  handleModal = e => {
    const { modalOn } = this.state;
    this.setState({
      modalOn: !modalOn,
    });
    console.log('clicked');
  };

  render() {
    const { modalOn } = this.state;
    return (
      <>
        <Message />
        <Header />
        <Main modalOn={modalOn} handleModal={this.handleModal} />
        {modalOn && <ImgModal handleModal={this.handleModal} />}
      </>
    );
  }
}

export default Details;
