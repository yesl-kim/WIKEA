/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './ScrollBox.scss';

class ScrollBox extends Component {
  render() {
    const { title, btn, children } = this.props;

    return (
      <>
        <header className="section_title">
          <h2>{title}</h2>
          {btn}
        </header>
        <div className="scroll_box">
          <ul className="item_list">{children}</ul>
        </div>
      </>
    );
  }
}

export default ScrollBox;
