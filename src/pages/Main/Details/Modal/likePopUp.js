import React, { Component } from 'react';
import './likePopUp.scss';

class likePopUp extends Component {
  render() {
    const { isLiked } = this.props;
    return (
      <>
        {isLiked ? (
          <div className="popup_liked">위시리스트에 담겼습니다.</div>
        ) : (
          <div className="popup_liked">즐겨찾기 목록에서 삭제되었습니다.</div>
        )}
      </>
    );
  }
}

export default likePopUp;
