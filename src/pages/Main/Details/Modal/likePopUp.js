import React, { Component } from 'react';
import './LikePopUp.scss';

class LikePopUp extends Component {
  render() {
    const { isLiked } = this.props;
    return (
      <>
        <div className="popup_liked invisible">
          {isLiked
            ? '위시리스트에 담겼습니다.'
            : '즐겨찾기 목록에서 삭제되었습니다.'}
        </div>
      </>
    );
  }
}

export default LikePopUp;
