import React, { Component } from 'react';
import './ImgModal.scss';
import ImgSlider from './ImgSlider';

class ImgModal extends Component {
  render() {
    const { handleModal, details } = this.props;
    return (
      <div className="modal">
        <div className="modal_back">
          <ImgSlider details={details} />
          <button onClick={handleModal} className="modal_btn" />
        </div>
      </div>
    );
  }
}

export default ImgModal;
