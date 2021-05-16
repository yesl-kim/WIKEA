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
    };
  }

  handleModal = () => {
    const { modalOn } = this.state;
    this.setState({
      modalOn: !modalOn,
    });
  };

  removePopUp = () => {
    const { isLiked } = this.state;
    if (isLiked === true) {
      console.log('보여라');
      return 'visible';
    } else {
      console.log('사라져라');
      return '';
    }
  };

  render() {
    const { modalOn, isLiked } = this.state;
    return (
      <>
        <Message />
        <Header />
        <Main
          handleModal={this.handleModal}
          isLiked={isLiked}
          popUpLiked={this.popUpLiked}
        />
        {modalOn && <ImgModal handleModal={this.handleModal} />}

        {/* {isLiked ? (
          <div className="popup_liked">
            위시리스트에 담겼습니다.
            <button />
          </div>
        ) : (
          <div className="popup_liked invisible">
            위시리스트에 담겼습니다.
            <button />
          </div>
        )}

        {!isLiked ? (
          <div className="popup_liked">
            즐겨찾기 목록에서 삭제되었습니다.
            <button />
          </div>
        ) : (
          <div className="popup_liked invisible">
            즐겨찾기 목록에서 삭제되었습니다.
            <button />
          </div>
        )} */}
      </>
    );
  }
}

export default Details;
