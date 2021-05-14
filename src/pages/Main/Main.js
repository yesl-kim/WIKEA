/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import NewProduct from './components/NewProduct/NewProduct';
import { API } from '../../config';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      recommended: [],
      newProducts: [],
    };
  }

  componentDidMount() {
    fetch(API.PRODUCTS_MAIN)
      .then(products => products.json())
      .then(products => {
        this.setState({ recommended: products.recommended });
      });
    fetch(API.NEW_PRODUCTS)
      .then(news => news.json())
      .then(news => this.setState({ newProducts: news }));
  }

  render() {
    const { newProducts } = this.state;
    return (
      <>
        <main className="main">
          <article>
            <div className="grid-container">
              <div className="row">
                <div className="col-lg-1 lg-only" />
                <div className="col-lg-12 col-md-12">
                  <section className="promotion">
                    <div className="image_container">
                      <Link to="/" className="image_link">
                        <img
                          alt="침실 가구"
                          src="https://www.ikea.com/images/07/06/07061f498bfa3b789ada7b5d5151a3c7.jpg?f=s"
                        />
                      </Link>
                    </div>
                    <div className="description">
                      <h2>500여개 침실가구 및 액세서리 최대 15% 할인</h2>
                      <p>
                        WIKEA Family 를 위한 14일간의 특별한 혜택! 하루를
                        시작하고 마무리 하는 공간인 침실에 WIKEA 제품들로 설렘을
                        더해보는 건 어때요? 5월19일까지 500여개의 침실가구 및
                        액세서리를 최대 15% 할인된 가격에 만나보세요!
                      </p>
                      <Link to="/" role="button">
                        지금 할인 받기
                      </Link>
                    </div>
                  </section>
                </div>
              </div>
              <section className="row">
                <div className="col-lg-1 lg-only" />
                <div className="col-lg-12 col-md-12">
                  스크롤 박스 컴포넌트 부분
                </div>
              </section>
              <section className="row">
                <div className="col-lg-1 lg-only" />
                <div className="col-lg-12 col-md-12">
                  <header className="section_title">
                    <h2>신제품을 만나보세요</h2>
                    <Link to="/" role="button">
                      신제품 보러 가기
                    </Link>
                  </header>
                </div>
                <div className="col-lg-1 lg-only" />
                {newProducts &&
                  newProducts.map(newProduct => (
                    <NewProduct
                      key={newProduct.id}
                      bgImage={newProduct.bgImage}
                      items={newProduct.products}
                    />
                  ))}
              </section>
            </div>
          </article>
        </main>
      </>
    );
  }
}

export default Main;
