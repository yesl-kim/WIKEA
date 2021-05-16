import React, { Component } from 'react';
import './LikePopUp.scss';

class LikePopUp extends Component {
  render() {
    return <div className="popup_liked invisible">{this.props.children}</div>;
  }
}

export default LikePopUp;
