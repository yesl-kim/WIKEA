import React, { Component } from 'react';
import './ScrollBox.scss';

class ScrollBox extends Component {
  render() {
    const { title, btn, children } = this.props;

    return (
      <>
        <div className="section_title">
          <h2>{title}</h2>
          {btn}
        </div>
        <div className="scroll_box">
          <ul className="item_list">{children}</ul>
        </div>
      </>
    );
  }
}

export default ScrollBox;
