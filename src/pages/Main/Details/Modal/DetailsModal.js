import React, { Component } from 'react';
// import Details from '../Details';
import './DetailsModal.scss';

class DetailsModal extends Component {
  constructor() {
    super();
    this.state = {
      height: false,
    };
  }

  showDetails = () => {
    const { height } = this.state;
    this.setState({
      height: !height,
    });
  };

  render() {
    const { details } = this.props;
    const { height } = this.state;
    return (
      <dl className="details_modal">
        <dt className="content_title">
          <button>
            <h1>제품 설명</h1>
          </button>
        </dt>
        <dd className="content">
          {details[0].content
            .split('.')
            .slice(0, 2)
            .map((text, idx) => {
              return <span key={idx}>{text}</span>;
            })}
          <button className="more" onClick={this.showDetails}>
            더보기
          </button>
          <div className={`optional_desc${height ? ' show' : ''}`}>
            {details[0].content
              .split('.')
              .slice(2)
              .map((text, idx) => {
                return <span key={idx}>{text}</span>;
              })}
          </div>
        </dd>
        <hr />
        <dt className="material_title">
          <button>
            <h2>소재 관리</h2>
            <i className="ic-chevron" />
          </button>
        </dt>
        <dd className="material_desc">
          {details[0].material.map((text, idx) => {
            return <span key={idx}>{text}</span>;
          })}
        </dd>
        <hr />
        <dt className="recycling_title">
          <button onClick={this.showDetails}>
            <h2>지속가능성 & 환경</h2>
            <i className="ic-chevron" />
          </button>
        </dt>
        <dd className="recycling_desc">{details[0].recycling}</dd>
        <hr />
        <dt className="package_title">
          <button onClick={this.showDetails}>
            <h2>포장</h2>
            <i className="ic-chevron" />
          </button>
        </dt>
        <dd className="package_desc">
          {details[0].package.map((text, idx) => {
            return <span key={idx}>{text}</span>;
          })}
        </dd>
        <hr />
        <dt className="title">
          <button onClick={this.showDetails}>
            <h2>조립 및 문서</h2>
            <i className="ic-chevron" />
          </button>
        </dt>
        <dd className="desc">정보없음</dd>
        <hr />
        <dt className="title">
          <button onClick={this.showDetails}>
            <h2>고시정보</h2>
            <i className="ic-chevron" />
          </button>
        </dt>
        <dd className="desc">정보없음</dd>
      </dl>
    );
  }
}

export default DetailsModal;
