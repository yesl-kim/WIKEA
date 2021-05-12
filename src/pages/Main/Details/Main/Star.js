import React, { Component } from 'react';
import './Star';

class Star extends Component {
  render() {
    return (
      <div className="rating-star">
        <i className="ic-star" />
        <i className="ic-star" />
        <i className="ic-star" />
        <i className="ic-star" />
        <i className="ic-star" />
        <span>(2)</span>
      </div>
    );
  }
}

export default Star;
