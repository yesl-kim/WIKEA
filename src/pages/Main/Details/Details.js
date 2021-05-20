import React from 'react';
import DetailsMain from './Main/DetailsMain.js';
import ImgModal from './Modal/ImgModal/ImgModal.js';
import SideModal from '../../../components/SideModal/SideModal.js';
import DetailsModal from '../Details/Modal/DetailsModal/DetailsModal.js';
import '../../../config.js';

import './Details.scss';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      modalOn: false,
      sideModalOn: false,
      details: [],
      product: [],
      recommended: [],
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(``)
      .then(res => res.json())
      .then(product =>
        this.setState({
          product: product.product[0],
          details: product.product[0].descriptions,
        })
      );

    fetch('/data/listmockdata.json')
      .then(res => res.json())
      .then(res =>
        this.setState({
          recommended: res.recommend_product,
        })
      );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      fetch(`API${this.props.match.params.id}`)
        .then(res => res.json())
        .then(product =>
          this.setState({
            product: product.product[0],
            details: product.product[0].descriptions,
          })
        );
    }
  }

  handleModal = () => {
    const { modalOn } = this.state;
    this.setState({
      modalOn: !modalOn,
    });
  };

  handleSideModal = () => {
    const { sideModalOn } = this.state;
    this.setState({
      sideModalOn: !sideModalOn,
    });
  };

  render() {
    const { modalOn, sideModalOn, details, product, recommended } = this.state;
    return (
      <>
        <DetailsMain
          recommended={recommended}
          details={details}
          product={product}
          handleModal={this.handleModal}
          handleSideModal={this.handleSideModal}
        />
        {modalOn && (
          <ImgModal product={product} handleModal={this.handleModal} />
        )}
        <SideModal
          handleSideModalOn={this.handleSideModal}
          on={sideModalOn}
          direction="right"
        >
          {sideModalOn && <DetailsModal details={details} />}
        </SideModal>
      </>
    );
  }
}

export default Details;
