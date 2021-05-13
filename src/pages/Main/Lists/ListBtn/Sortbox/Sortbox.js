import React from 'react';
import './Sortbox.scss';

class Sortbox extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`Sortbox ${className}`}>
        <label className="radio_btn">
          <span>베스트 매치</span>
          <div className="radio">
            <input type="radio" id="radio" name="radioname" />
          </div>
        </label>
        <label className="radio_btn">
          <span>낮은 가격 순</span>
          <div className="radio">
            <input type="radio" id="radio" name="radioname" />
          </div>
        </label>
        <label className="radio_btn">
          <span>높은 가격 순</span>
          <div className="radio">
            <input type="radio" id="radio" name="radioname" />
          </div>
        </label>
        <label className="radio_btn">
          <span>최신</span>
          <div className="radio">
            <input type="radio" id="radio" name="radioname" />
          </div>
        </label>
        <label className="radio_btn">
          <span>고객 평가</span>
          <div className="radio">
            <input type="radio" id="radio" name="radioname" />
          </div>
        </label>
        <label className="radio_btn">
          <span>이름</span>
          <div className="radio">
            <input type="radio" id="radio" name="radioname" />
          </div>
        </label>
        <label className="radio_btn">
          <span>가장 인기있는</span>
          <div className="radio">
            <input type="radio" id="radio" name="radioname" />
          </div>
        </label>
        <label className="radio_btn">
          <span>폭</span>
          <div className="radio">
            <input type="radio" id="radio" name="radioname" />
          </div>
        </label>
        <label className="radio_btn">
          <span>신장</span>
          <div className="radio">
            <input type="radio" id="radio" name="radioname" />
          </div>
        </label>
      </div>
    );
  }
}

export default Sortbox;
