import React from 'react';
import './Message.scss';

class Message extends React.Component {
  render() {
    return (
      <div className="h-message-wrap">
        <div className="h-message lg-only">
          <i className="ic-check" />
          <span>코로나 19 대응 공지</span>
        </div>
        <div className="h-message lg-only">
          <i className="ic-phone" />
          <span>비대면 전화주문 서비스</span>
        </div>
        <div className="h-message">
          <i className="ic-cart" />
          <span>WIKEA 베스트셀러</span>
        </div>
      </div>
    );
  }
}

export default Message;
