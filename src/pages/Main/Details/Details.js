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
      products: [],
    };
  }

  componentDidMount() {
    fetch('/data/detailsData/products.json')
      .then(res => res.json())
      .then(products =>
        this.setState({
          products: products,
          details: products[0],
        })
      );

    fetch('http://192.168.0.39:5000/product/nikelamp')
      .then(res => res.json())
      .then(result => console.log(result));
  }

  handleModal = () => {
    const { modalOn } = this.state;
    this.setState({
      modalOn: !modalOn,
    });
  };

  render() {
    const { modalOn, details, products } = this.state;
    return (
      <>
        <Message />
        <Header />
        <Main
          details={details}
          products={products}
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
