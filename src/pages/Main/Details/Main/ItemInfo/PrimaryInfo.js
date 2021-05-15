import React, { Component } from 'react';
import Star from '../../../../../components/Star/Star.js';
import './PrimaryInfo.scss';

class PrimayInfo extends Component {
  render() {
    const { details } = this.props;
    console.log(details);
    return (
      <div className="item-primary-info">
        <strong>{details.is_new ? 'NEW' : ''}</strong>

        <h1>
          <span>SESAMFRÖN 세삼프뢴</span>
          <p>화초물뿌리개, 유리, 25 cl</p>
        </h1>
        <div className="price">W 4,900</div>
        <Star />
      </div>
    );
  }
}

export default PrimayInfo;
