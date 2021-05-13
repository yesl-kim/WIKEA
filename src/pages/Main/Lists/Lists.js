import React from 'react';
import ItemExplanation from './ItemExplanation/ItemExplanation';
import ListBtn from './ListBtn/ListBtn';
import Products from './Products/Products';
import Product from '../../../components/Product/Product';
import './Lists.scss';

class Lists extends React.Component {
  constructor() {
    super();

    this.state = { data: '' };
  }

  componentDidMount() {
    fetch('http://10.58.1.239:5000/product/cat/table-lamps')
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res,
        });
      });
  }

  render() {
    console.log(this.state.data);

    return (
      <main className="grid-container">
        <div className="row">
          <div className="col-lg-1 col-md-1"></div>
          <div className="col-lg-12 col-md-11">
            <ItemExplanation />
            <ListBtn />
            <Products>
              <Product>
                <input type="checkbox" />
              </Product>
              <Product>
                <input type="checkbox" />
              </Product>
              <Product>
                <input type="checkbox" />
              </Product>
              <Product>
                <input type="checkbox" />
              </Product>
            </Products>
          </div>
        </div>
      </main>
    );
  }
}

export default Lists;
