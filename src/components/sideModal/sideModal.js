/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './SideModal.scss';

class SideModal extends Component {
  render() {
    const { title, direction } = this.props;
    return (
      <div className="sideModal">
        <div className="dimmer" />
        <div className={`nav_like ${direction}`}>
          <h1 className="visually-hidden">{title}</h1>
          <button type="button" className="close">
            <i className="ic-close" />
          </button>
        </div>
      </div>
    );
  }
}

export default SideModal;
