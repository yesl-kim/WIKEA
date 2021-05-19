import React from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../config';
import Label from './components/Label/Label';
import ScrollBox from '../../components/ScrollBox/ScrollBox';
import Product from '../../components/Product/Product';
import './Main.scss';

class Main extends React.Component {
  newBgImages = [];

  constructor() {
    super();
    this.state = {
      recommended: [],
      newProducts: [],
    };
  }

  componentDidMount() {
    fetch(API.NEW_BG_IMAGES)
      .then(images => images.json())
      .then(images => (this.newBgImages = images));
    fetch(API.PRODUCTS_MAIN_TEST)
      .then(products => products.json())
      .then(products => {
        this.setState({
          newProducts: products.new_products,
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

  render() {
    const { newProducts, recommended } = this.state;
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
                  <ScrollBox>
                    {recommended.map(el => (
                      <li className="item">
                        <Product product={el} />
                      </li>
                    ))}
                  </ScrollBox>
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
                {!!this.newBgImages.length && (
                  <>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="new_product">
                        <img
                          alt={this.newBgImages[0].alt}
                          src={this.newBgImages[0].src}
                        />
                        {!!newProducts.length &&
                          newProducts[0].map(product => (
                            <Label
                              product={product}
                              number={this.newBgImages[0].id}
                            />
                          ))}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="new_product">
                        <img
                          alt={this.newBgImages[1].alt}
                          src={this.newBgImages[1].src}
                        />
                        {!!newProducts.length &&
                          newProducts[1].map(product => (
                            <Label
                              product={product}
                              number={this.newBgImages[1].id}
                            />
                          ))}
                      </div>
                    </div>
                  </>
                )}
              </section>
            </div>
          </article>
        </main>
      </>
    );
  }
}

export default Main;
