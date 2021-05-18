import React, { Component } from 'react';
import Detail from './Detail';
import './DetailsModal.scss';

class DetailsModal extends Component {
  constructor() {
    super();
    this.state = {
      iscollapsed: false,
    };
  }

  showDetails = () => {
    const { iscollapsed } = this.state;
    this.setState({
      iscollapsed: !iscollapsed,
    });
  };

  render() {
    const { details } = this.props;
    const { iscollapsed } = this.state;
    return (
      <div className="product_details">
        <h2 className="product_details_title">제품 설명</h2>
        <div className="product_details_container">
          {details[0].content
            .split('.')
            .slice(0, 2)
            .map((text, idx) => {
              return <span key={idx}>{text}</span>;
            })}
          <button className="more" onClick={this.showDetails}>
            더보기
          </button>
          <div className={`optional_desc${iscollapsed ? ' show' : ''}`}>
            {details[0].content
              .split('.')
              .slice(2)
              .map((text, idx) => {
                return <span key={idx}>{text}</span>;
              })}
          </div>
        </div>
        <ul className="accordion">
          <Detail title={TITLE[0]}>
            {details[0].material.map((text, idx) => {
              return <span key={idx}>{text}</span>;
            })}
          </Detail>
          <Detail title={TITLE[1]}>{details[0].recycling}</Detail>
          <Detail title={TITLE[2]}>
            {details[0].package.map((text, idx) => {
              return <span key={idx}>{text}</span>;
            })}
          </Detail>
          <Detail title={TITLE[3]}>정보없음</Detail>
          <Detail title={TITLE[4]}>정보없음</Detail>
        </ul>
      </div>
    );
  }
}

export default DetailsModal;
const TITLE = [
  '소재 관리',
  '지속가능성 & 환경',
  '포장',
  '조립 및 문서',
  '고시정보',
];
