/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './SideModal.scss';

class SideModal extends Component {
  render() {
    const { title, direction, children, on, handleSideModalOn } = this.props;
    return (
      <div className={on ? 'side_modal_box on' : 'side_modal_box'}>
        <div className="dimmer" onClick={handleSideModalOn} />
        <aside className={`side_modal ${direction}`}>
          <h1 className="visually-hidden">{title}</h1>
          <button type="button" className="close" onClick={handleSideModalOn}>
            <i className="ic-close" />
          </button>
        </aside>
        {children}
      </div>
    );
  }
}

export default SideModal;
