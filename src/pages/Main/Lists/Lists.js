import React from 'react';
import ItemExplanation from './ItemExplanation/ItemExplanation';
import ListBtn from './ListBtn/ListBtn';
import Products from './Products/Products';
import Product from '../../../components/Product/Product';
import './Lists.scss';

class Lists extends React.Component {
  constructor() {
    super();

    this.state = {
      product: [],
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
    const { product } = this.state;

    return (
      <main className="grid-container">
        <div className="row">
          <div className="col-lg-1 col-md-1"></div>
          <div className="col-lg-12 col-md-11">
            <ItemExplanation />
            <ListBtn />
            <Products>
              {product.map(item => (
                <Product
                  name={item.name}
                  category={item.category}
                  price={item.price}
                  isFavorite={item.isFavorite}
                  rating={item.rating}
                  img={item.img}
                  classGrid="col-lg-3 col-md-4"
                  key={item.id}
                >
                  <input type="checkbox" />
                </Product>
              ))}
            </Products>
          </div>
        </div>
      </main>
    );
  }
}

export default Lists;
