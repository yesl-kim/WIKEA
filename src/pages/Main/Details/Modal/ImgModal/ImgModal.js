import React, { Component } from 'react';
import ImgSlider from './ImgSlider';
import './ImgModal.scss';

class ImgModal extends Component {
  render() {
    const { handleModal, product } = this.props;
    return (
      <div className="modal">
        <div className="modal_back">
          <ImgSlider product={product} />
          <button onClick={handleModal} className="modal_btn" />
        </div>
      </div>
    );
  }
}

export default ImgModal;
