import React from 'react';
import './ListBtn.scss';

class ListBtn extends React.Component {
  render() {
    return (
      <div className="btnLine">
        <div className="btnContainer">
          <button aria-label="제품 비교 선택 활성화">
            <span>비교</span>
          </button>
          <button aria-label="분류 옵션보기">
            <span>정렬</span>
            <i className="ic-caret sortBtn" />
          </button>
          <button aria-label="필터 모달 표시 가격">
            <span>가격</span>
          </button>
          <button aria-label="온라인 구매 가능 필터 이름별로 제품 필터링">
            <span>온라인 구매 가능</span>
          </button>
          <button aria-label="필터 모달 표시 색상">
            <span>색상</span>
          </button>
          <button aria-label="필터 모달 표시 사이즈">
            <span>사이즈</span>
          </button>
          <button aria-label="필터 모달 표시 고객 평가">
            <span>고객 평가</span>
          </button>
          <button aria-label="필터 모달 더보기, 더 지속 가능한 소재, 특가, 신재품, 시리즈">
            <span>모든 필터</span>
            <i className="ic-menu" />
          </button>
        </div>
        <div className="productBtn">
          <span>61개</span>
          <span>제품</span>
          <span>디지털 쇼룸</span>
        </div>
      </div>
    );
  }
}
export default ListBtn;
