import React from 'react';
import { Link } from 'react-router-dom';
import NewProduct from './components/NewProduct/NewProduct';
import ScrollBox from '../../components/ScrollBox/ScrollBox';
import Product from '../../components/Product/Product';
import { API } from '../../config';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      recommended: [],
      newProductSections: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.6.62:8000/product/newlist')
      .then(products => products.json())
      .then(products => {
        this.setState({ newProductSections: products.new_products });
        console.log('newProductSections 들어옴');
      });
    fetch('http://10.58.6.62:8000/product/recommendation')
      .then(res => res.json())
      .then(res => {
        this.setState({
          recommended: res.recommended_product,
        });
        console.log('recommended 들어옴');
      });
    console.log('zjaelak');
    console.log('api', API.NEW_PRODUCT);
  }

  render() {
    const { recommended, newProductSections } = this.state;
    console.log('recommended', recommended);
    console.log('newProductSections', newProductSections);
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
                          src="/images/bgImages/visual.png"
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
                  <ScrollBox title="추천 제품">
                    {!!recommended.length &&
                      recommended.map(product => <Product product={product} />)}
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
                {!!newProductSections.length &&
                  newProductSections.map(section => (
                    <NewProduct key={section.id} section={section} />
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
