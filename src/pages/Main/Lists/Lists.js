import React from 'react';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import ItemExplanation from './ItemExplanation/ItemExplanation';
import ListBtn from './ListBtn/ListBtn';
import Products from './Products/Products';
import Product from '../../../components/Product/Product';
import ScrollBox from '../../../components/ScrollBox/ScrollBox';
import './Lists.scss';

class Lists extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      recommended: [],
      showMoreBar: 1,
    };
  }

  // // Mock data 용 fetch입니다. 백엔드와 통신 이후 삭제 예정
  // componentDidMount() {
  //   fetch('/data/listmockdata.json')
  //     .then(product => product.json())
  //     .then(products => {
  //       this.setState({
  //         products: products.product,
  //       });
  //     });

  //   fetch('/data/listmockdata.json')
  //     .then(res => res.json())
  //     .then(products =>
  //       this.setState({
  //         recommended: products.product,
  //       })
  //     );
  // }

  componentDidMount() {
    const subCategory = this.props.match.params.sub_category_name;

    fetch(`http://10.58.2.174:5000/product?sub_category_name=${subCategory}`)
      .then(product => product.json())
      .then(products => {
        this.setState({
          products: products.product,
        });
      });

    fetch('/data/listmockdata.json')
      .then(res => res.json())
      .then(res =>
        this.setState({
          recommended: res.product,
        })
      );
  }

  pagination = (subCategory, page) => {
    fetch(
      `http://10.58.2.174:5000/product?sub_category_name=${subCategory}&page=${page}`
    )
      .then(res => res.json())
      .then(products =>
        this.setState({ products: products.product, showMoreBar: page })
      );
  };

  filterBtn = filterName => {
    const subCategory = this.props.match.params.sub_category_name;

    fetch(
      `http://10.58.2.174:5000/product?sub_category_name=${subCategory}&${filterName}`
    )
      .then(res => res.json())
      .then(products =>
        this.setState({
          products: products.product,
        })
      );
  };

  render() {
    const { products, recommended, showMoreBar } = this.state;
    const subCategory = this.props.match.params.sub_category_name;

    return (
      <main className="lists">
        <div className="grid-container">
          <div className="row">
            <div className="col-lg-1 col-md-1"></div>
            <div className="col-lg-12 col-md-11">
              <Breadcrumb />
              <ItemExplanation />
              <ListBtn filterBtn={this.filterBtn} />
              <Products products={products} />
              <div className="show_more">
                <div className="show_more_bar">
                  <div
                    className="show_more_charge_half"
                    style={{ width: `${(showMoreBar / 2) * 100}%` }}
                  />
                </div>
                <div className="pagination_btn">
                  <button
                    className="show_more_btn"
                    type="button"
                    onClick={() => this.pagination(subCategory, 1)}
                  >
                    1
                  </button>
                  <button
                    className="show_more_btn"
                    type="button"
                    onClick={() => this.pagination(subCategory, 2)}
                  >
                    2
                  </button>
                </div>
              </div>
              <ScrollBox title="추천 제품">
                {recommended.map(recommended => (
                  <li className="item">
                    <Product product={recommended} />
                  </li>
                ))}
              </ScrollBox>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Lists;
