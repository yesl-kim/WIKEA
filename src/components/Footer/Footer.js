import React from 'react';
import LinkLines from './FooterList/FooterList';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="row footer_links">
          <div className="footer_signup col-lg-4">
            <h2>WIKEA Family</h2>
            <p>
              지금 WIKEA Family에 무료로 가입하고
              <br /> 다양한 맴버 전용 해택을 누리세요
              <a href="##">자세히 보기</a>
            </p>
            <button>Wecode Family 가입하기</button>
          </div>
          <ul className="links col-lg-2">
            <h4>고객문의</h4>
            {LinkLines.question.map((questions, index) => (
              <li key={index}>
                <a href={questions.url}>{questions.name}</a>
              </li>
            ))}
          </ul>
          <ul className="links col-lg-2">
            <h4>쇼핑하기</h4>
            {LinkLines.shopping.map((el, index) => (
              <li key={index}>
                <a href={el.url}>{el.name}</a>
              </li>
            ))}
          </ul>
          <ul className="links col-lg-2">
            <h4>서비스</h4>
            {LinkLines.servise.map((el, index) => (
              <li key={index}>
                <a href={el.url}>{el.name}</a>
              </li>
            ))}
          </ul>
          <ul className="links col-lg-2">
            <h4>WIKEA 이야기</h4>
            {LinkLines.story.map((el, index) => (
              <li key={index}>
                <a href={el.url}>{el.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
