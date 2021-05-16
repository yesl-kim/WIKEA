import React from 'react';
import Message from '../../../components/Header/Message';
import Header from '../../../components/Header/Header';
import Main from './Main/Main.js';
import ImgModal from './Modal/ImgModal';
import './Details.scss';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      modalOn: false,
      details: [],
      product: [],
    };
  }

  componentDidMount() {
    //서버 없을 때,
    // fetch('/data/detailsData/test.json')
    //   .then(res => res.json())
    //   .then(product =>
    //     this.setState({
    //       product: product.product[0],
    //       details: product.product[0].descriptions,
    //     })
    //   );
    fetch('http://192.168.0.39:5000/product/p/nikelamp')
      .then(res => res.json())
      .then(product =>
        this.setState({
          product: product.product[0],
          details: product.product[0].descriptions,
        })
      );
  }

  handleModal = () => {
    const { modalOn } = this.state;
    this.setState({
      modalOn: !modalOn,
    });
  };

  render() {
    const { modalOn, details, product } = this.state;
    console.log(product, details);
    return (
      <>
        <Message />
        <Header />
        <Main
          details={details}
          product={product}
          handleModal={this.handleModal}
        />
        {modalOn && (
          <ImgModal details={details} handleModal={this.handleModal} />
        )}
      </>
    );
  }
}

export default Details;
