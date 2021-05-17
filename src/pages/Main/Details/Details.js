import React from 'react';

import Main from './Main/Main.js';
import ImgModal from './Modal/ImgModal/ImgModal.js';
import SideModal from '../../../components/SideModal/SideModal.js';
import DetailsModal from '../Details/Modal/DetailsModal/DetailsModal.js';
import './Details.scss';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      modalOn: false,
      on: false,
      details: [],
      product: [],
    };
  }

  componentDidMount() {
    //서버 없을 때,
    fetch('/data/detailsData/test.json')
      .then(res => res.json())
      .then(product =>
        this.setState({
          product: product.product[0],
          details: product.product[0].descriptions,
        })
      );
    // fetch('http://192.168.0.39:5000/product/p/nikelamp')
    //   .then(res => res.json())
    //   .then(product =>
    //     this.setState({
    //       product: product.product[0],
    //       details: product.product[0].descriptions,
    //     })
    //   );
  }

  handleModal = () => {
    const { modalOn } = this.state;
    this.setState({
      modalOn: !modalOn,
    });
  };

  handleSideModal = () => {
    const { on } = this.state;
    this.setState({
      on: !on,
    });
  };

  render() {
    const { modalOn, on, details, product } = this.state;
    return (
      <>
        <Main
          details={details}
          product={product}
          handleModal={this.handleModal}
          handleSideModal={this.handleSideModal}
        />
        {modalOn && (
          <ImgModal product={product} handleModal={this.handleModal} />
        )}

        {on && (
          <SideModal
            handleSideModalOn={this.handleSideModal}
            on={on}
            direction="right"
          >
            <DetailsModal details={details} />
          </SideModal>
        )}
      </>
    );
  }
}

export default Details;
