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

  // Mock data 용 fetch입니다. 백엔드와 통신 이후 삭제 예정
  componentDidMount() {
    fetch('http://localhost:3000/data/listmockdata.json')
      .then(product => product.json())
      .then(products => {
        this.setState({
          products: products.product,
        });
      });
  }

  // pagination 구현 로직입니다. 백엔드와 통신 이후 주석 풀 예정
  // fetchProduct = (sub_category_name, page) => {
  //   fetch(
  //     ` /product/list/sub_category_name=${sub_category_name}&page=${page}`
  //   )
  //     .then(res => res.json())
  //     .then(product => this.setState({ product }));
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
                  style={{ width: `${showMoreBar}%` }}
                ></div>
              </div>
              <div className="pagination_btn">
                <button
                  className="show_more_btn"
                  type="button"
                  // onClick={this.fetchProduct(table_lamps, 1)}
                >
                  1
                </button>
                <button
                  className="show_more_btn"
                  type="button"
                  // onClick={this.fetchProduct(table_lamps, 2)}
                >
                  2
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Lists;
