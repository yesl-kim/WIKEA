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
    };
  }

  // // Mock data 용 fetch입니다. 백엔드와 통신 이후 삭제 예정
  // componentDidMount() {
  //   const subCat = this.props.match.params.subCat;

  //   fetch('/data/listmockdata.json')
  //     .then(product => product.json())
  //     .then(products => {
  //       this.setState({
  //         products: products.product,
  //       });
  //     });

  //   fetch('/data/listmockdata.json')
  //     .then(res => res.json())
  //     .then(res =>
  //       this.setState({
  //         recommended: res.product,
  //       })
  //     );
  // }

  componentDidMount() {
    const subCat = this.props.match.params.subCat;

    fetch(`http://172.30.1.23:5000/product/list/?sub_category_name=${subCat}`)
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

  fetchProduct = (sub_category_name, page) => {
    fetch(
      `http://172.30.1.23:5000/product/list/?sub_category_name=${sub_category_name}&page=${page}`
    )
      .then(res => res.json())
      .then(products => this.setState({ products: products.product }));
  };

  render() {
    const { products, recommended, showMoreBar } = this.state;

    return (
      <main className="lists">
        <div className="grid-container">
          <div className="row">
            <div className="col-lg-1 col-md-1"></div>
            <div className="col-lg-12 col-md-11">
              <Breadcrumb />
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
                    onClick={() => this.fetchProduct('work-lamps', 1)}
                  >
                    1
                  </button>
                  <button
                    className="show_more_btn"
                    type="button"
                    onClick={() => this.fetchProduct('work-lamps', 2)}
                  >
                    2
                  </button>
                </div>
              </div>
              <ul>
                <h2 className="scrollbox_name">추천 제품</h2>
                <ScrollBox>
                  {recommended.map(el => (
                    <li className="item">
                      <Product product={el} />
                    </li>
                  ))}
                </ScrollBox>
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Lists;
