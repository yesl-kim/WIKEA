import React from 'react';
import Message from '../../../components/Header/Message';
import Header from '../../../components/Header/Header';
import Main from './Main/Main.js';
import './Details.scss';

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
        {modalOn && (
          <div className="modal">
            <div className="modal_back">
              <img
                alt="상세 이미지"
                src="https://www.ikea.com/kr/ko/images/products/arstid-…ble-lamp-brass-white__0880725_pe617347_s5.jpg?f=m"
              />
              <button onClick={this.handleModal} className="modal_btn" />
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Details;
