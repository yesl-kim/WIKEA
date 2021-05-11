/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './Title.scss';

class Title extends Component {
  render() {
    const { title, btnName } = this.props;
    return (
      <>
        <div className="col-lg-1 col-md-1" />
        <div className="col-lg-12 col-md-12">
          <div className="section_title">
            <h2>{title}</h2>
            <a role="button">{btnName}</a>
          </div>
        </div>
      </>
    );
  }
}

export default Title;
