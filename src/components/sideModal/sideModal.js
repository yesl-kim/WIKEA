/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './SideModal.scss';

class SideModal extends Component {
  constructor() {
    super();
    this.state = {
      isOn: true,
    };
  }

  handleClick = () => {
    console.log('clicked');
    this.setState({ isOn: false });
  };

  render() {
    const { title, direction, children } = this.props;
    const { isOn } = this.state;
    return (
      <div className={isOn ? 'side_modal_box on' : 'side_modal_box'}>
        <div className="dimmer" />
        <aside className={`side_modal ${direction}`}>
          <h1 className="visually-hidden">{title}</h1>
          <button type="button" className="close" onClick={this.handleClick}>
            <i className="ic-close" />
          </button>
        </aside>
        {children}
      </div>
    );
  }
}

export default SideModal;
