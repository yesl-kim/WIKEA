/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import NewProduct from './components/NewProduct/NewProduct';

import '../../styles/common.scss';
import '../../styles/base/_globals.scss';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      newProducts: [
        {
          id: '1',
          bgImage: {
            alt: '조명 인테리어',
            src: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
          },
          products: [
            {
              id: 'product01',
              name: '복슬리브',
              category: '조명',
              price: 99900,
              inNew: true,
            },
          ],
        },
        {
          id: '2',
          bgImage: {
            alt: '조명 인테리어',
            src: 'https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
          },
          products: [
            {
              id: 'product02',
              name: 'SNÖBYAR 스뇌뷔아르',
              category: '탁상 스탠드',
              price: 59900,
              inNew: true,
            },
          ],
        },
      ],
    };
  }

  render() {
    const { newProducts } = this.state;
    console.log(newProducts);
    return (
      <>
        <main className="main">
          <article>
            <div className="container">
              <div className="row">
                <div className="col-lg-1" />
                <div className="col-lg-12 col-md-12">
                  <section className="promotion">
                    <div className="image_container">
                      <a className="image_link">
                        <img
                          alt="침실 가구"
                          src="https://www.ikea.com/images/07/06/07061f498bfa3b789ada7b5d5151a3c7.jpg?f=s"
                        />
                      </a>
                    </div>
                    <div className="description">
                      <h2>500여개 침실가구 및 액세서리 최대 15% 할인</h2>
                      <p>
                        WIKEA Family 를 위한 14일간의 특별한 혜택! 하루를
                        시작하고 마무리 하는 공간인 침실에 WIKEA 제품들로 설렘을
                        더해보는 건 어때요? 5월19일까지 500여개의 침실가구 및
                        액세서리를 최대 15% 할인된 가격에 만나보세요!
                      </p>
                      <a role="button">지금 할인 받기</a>
                    </div>
                  </section>
                </div>
              </div>
              <section className="row">
                <div className="col-lg-1 col-md-1" />
                <div className="col-lg-12 col-md-12">
                  스크롤 박스 컴포넌트 부분
                </div>
              </section>
              <section className="row">
                <div className="col-lg-1 col-md-1" />
                <div className="col-lg-12 col-md-12">
                  <header className="section_title">
                    <h2>신제품을 만나보세요</h2>
                    <a role="button">신제품 보러가기</a>
                  </header>
                </div>
                <div className="col-lg-1" />
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
