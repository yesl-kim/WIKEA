import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    const linkLines = {
      question: [
        { name: '고객지원', url: '##' },
        { name: '자주 묻는 질문', url: '##' },
        { name: '문의하기', url: '##' },
        { name: '배송조회', url: '##' },
        { name: '교환환불', url: '품질보증' },
        { name: '제품리콜', url: '##' },
        { name: '제품 구매 가이드', url: '##' },
        { name: '피드백', url: '##' },
      ],
      shopping: [
        { name: '쇼핑하기', url: '##' },
        { name: '전화 주문', url: '##' },
        { name: 'WIKEA for Business', url: '##' },
        { name: '셀프 플래닝', url: '##' },
        { name: 'WIKEA 모바일 앱', url: '품질보증' },
        { name: 'WIKEA 카탈로그', url: '##' },
        { name: '제품 사용 팁/가이드', url: '##' },
        { name: '결제 옵션', url: '##' },
        { name: '기프트 카드', url: '##' },
      ],
      servise: [
        { name: 'WIKEA 서비스', url: '##' },
        { name: '배송 서비스', url: '##' },
        { name: '조립 서비스', url: '##' },
        { name: '주방 서비스', url: '##' },
        { name: '욕실 서비스', url: '품질보증' },
        { name: '홈퍼니싱 플래닝 서비스', url: '##' },
        { name: '인테리어 디자인 서비스', url: '##' },
        { name: '바이백 서비스', url: '##' },
      ],
      story: [
        { name: 'Wecode 소개', url: '##' },
        { name: '데모크리틱 디자인', url: '##' },
        { name: '지속가능한 생활', url: '##' },
        { name: '뉴스', url: '##' },
        { name: '채용 정보', url: '품질보증' },
      ],
    };
    return (
      <footer className="footer">
        <div className="row footerLinks">
          <div className="footerSignUp col-lg-4">
            <h2>WIKEA Family</h2>
            <p>
              지금 WIKEA Family에 무료로 가입하고
              <br /> 다양한 맴버 전용 해택을 누리세요
              <a href="##">자세히 보기</a>
            </p>
            <button>Wecode Family 가입하기</button>
          </div>
          <div className="links col-lg-2">
            <h4>고객문의</h4>
            {linkLines.question.map(el => (
              <div>
                <a href={el.url}>{el.name}</a>
              </div>
            ))}
          </div>
          <div className="links col-lg-2">
            <h4>쇼핑하기</h4>
            {linkLines.shopping.map(el => (
              <div>
                <a href={el.url}>{el.name}</a>
              </div>
            ))}
          </div>
          <div className="links col-lg-2">
            <h4>서비스</h4>
            {linkLines.servise.map(el => (
              <div>
                <a href={el.url}>{el.name}</a>
              </div>
            ))}
          </div>
          <div className="links col-lg-2">
            <h4>WIKEA 이야기</h4>
            {linkLines.story.map(el => (
              <div>
                <a href={el.url}>{el.name}</a>
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </footer>
    );
  }
}

export default Footer;
