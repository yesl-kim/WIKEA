import React, { Component } from 'react';
import './likePopUp.scss';

class LikePopUp extends Component {
  render() {
    const { isLiked } = this.props;
    return (
      <div className={`popup_liked ${isLiked ? '' : 'invisible'}`}>
        {this.props.children}
      </div>
    );
  }
}

export default LikePopUp;
