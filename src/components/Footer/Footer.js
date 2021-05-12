import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
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
            <div>고객지원</div>
            <div>자주 묻는 질문</div>
            <div>문의하기</div>
            <div>배송조회</div>
            <div>교환환불</div>
            <div>품질보증</div>
            <div>제품리콜</div>
            <div>제품 구매 가이드</div>
            <div>피드백</div>
          </div>
          <div className="links col-lg-2">
            <h4>쇼핑하기</h4>
            <div>쇼핑하기</div>
            <div>전화 주문</div>
            <div>WIKEA for Business</div>
            <div>셀프 플래닝</div>
            <div>WIKEA 모바일 앱</div>
            <div>WIKEA 카탈로그</div>
            <div>제품 사용 팁/가이드</div>
            <div>결제 옵션</div>
            <div>기프트 카드</div>
          </div>
          <div className="links col-lg-2">
            <h4>서비스</h4>
            <div>WIKEA 서비스</div>
            <div>배송 서비스</div>
            <div>조립 서비스</div>
            <div>주방 서비스</div>
            <div>욕실 서비스</div>
            <div>홈퍼니싱 플래닝 서비스</div>
            <div>인테리어 디자인 서비스</div>
            <div>바이백 서비스</div>
          </div>
          <div className="links col-lg-2">
            <h4>WIKEA 이야기</h4>
            <div>Wecode 소개</div>
            <div>데모크래틱 디자인</div>
            <div>지속가능한 생활</div>
            <div>뉴스</div>
            <div>채용정보</div>
          </div>
        </div>
        <div></div>
      </footer>
    );
  }
}

export default Footer;
