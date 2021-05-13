import React from 'react';
import './Message.scss';

class Message extends React.Component {
  render() {
    return (
      <ul className="message-wrap">
        <li className="lg-only">
          <i className="ic-check" />
          <strong>코로나 19 대응 공지</strong>
        </li>
        <li className="lg-only">
          <i className="ic-phone" />
          <span>비대면 전화주문 서비스</span>
        </li>
        <li>
          <i className="ic-cart" />
          <span>WIKEA 베스트셀러</span>
        </li>
      </ul>
    );
  }
}

export default Message;
