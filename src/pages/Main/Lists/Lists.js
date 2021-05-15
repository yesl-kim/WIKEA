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
      offset: 0,
      LIMIT: 10,
      showMoreBar: 50,
    };
  }

  // Mock Data용 fetch
  // componentDidMount() {
  //   fetch('http://localhost:3000/data/listmockdata.json')
  //     .then(product => product.json())
  //     .then(product => {
  //       this.setState({
  //         product,
  //       });
  //     });
  // }

  // fetchProduct = () => {
  //   const { offset, LIMIT, showMoreBar } = this.state;

  //   const nextOffset = LIMIT + offset;
  //   fetch(
  //     `http://localhost:3000/data/listmockdata.json/products?offset=${offset}&limit=${nextOffset}`
  //   )
  //     .then(res => res.json())
  //     .then(product => this.setState({ product, offset: nextOffset, showMoreBar: !showMoreBar }));
  // };

  render() {
    const { products, showMoreBar } = this.state;

    return (
      <main className="grid-container">
        <div className="row">
          <div className="col-lg-1 col-md-1"></div>
          <div className="col-lg-12 col-md-11">
            <ItemExplanation />
            <ListBtn />
            <Products products={products} />
            <div className="show_more">
              <div className="show_more_bar">
                <div
                  className="show_more_charge_half"
                  style={{ width: showMoreBar }}
                ></div>
              </div>
              <button
                className="show_more_btn"
                type="button"
                // onClick={this.fetchProduct}
              >
                더보기
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Lists;
