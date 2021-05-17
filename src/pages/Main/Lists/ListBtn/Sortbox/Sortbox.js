import React from 'react';
import './Sortbox.scss';

class Sortbox extends React.Component {
  render() {
    const { visible } = this.props;
    const btnTitle = [
      '베스트 매치',
      '낮은 가격 순',
      '높은 가격 순',
      '최신',
      '고객 평가',
      '이름',
      '가장 인기있는',
      '폭',
      '신장',
    ];

    return (
      <div className={`${visible ? 'sortbox visible' : 'sortbox'}`}>
        {btnTitle.map((title, index) => (
          <label className="radio_btn" key={index}>
            <span>{title}</span>
            <div className="radio">
              <input type="radio" id="radio" name="radioname" />
            </div>
          </label>
        ))}
      </div>
    );
  }
}

export default Sortbox;
