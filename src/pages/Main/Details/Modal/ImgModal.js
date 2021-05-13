import React, { Component } from 'react';
import './ImgModal.scss';
import ImgSlider from './ImgSlider';

class ImgModal extends Component {
  render() {
    const { right, goNext, goPrev, handleModal } = this.props;
    return (
      <div className="modal">
        <div className="modal_back">
          <ImgSlider right={right} goNext={goNext} goPrev={goPrev} />
          <button onClick={handleModal} className="modal_btn" />
        </div>
      </div>
    );
  }
}

export default ImgModal;
