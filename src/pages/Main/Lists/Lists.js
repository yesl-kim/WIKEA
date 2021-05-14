import React from 'react';
import ItemExplanation from './ItemExplanation/ItemExplanation';
import ListBtn from './ListBtn/ListBtn';
import Products from './Products/Products';
import './Lists.scss';

class Lists extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/listmockdata.json')
      .then(product => product.json())
      .then(product => {
        this.setState({
          product,
        });
      });
  }

  render() {
    const { products } = this.state;

    return (
      <main className="grid-container">
        <div className="row">
          <div className="col-lg-1 col-md-1"></div>
          <div className="col-lg-12 col-md-11">
            <ItemExplanation />
            <ListBtn />
            <Products products={products} />
          </div>
        </div>
      </main>
    );
  }
}

export default Lists;
