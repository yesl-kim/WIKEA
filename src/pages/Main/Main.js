/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <article>
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-md-1" />
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
                      WIKEA Family 를 위한 14일간의 특별한 혜택! 하루를 시작하고
                      마무리 하는 공간인 침실에 WIKEA 제품들로 설렘을 더해보는
                      건 어때요? 5월19일까지 500여개의 침실가구 및 액세서리를
                      최대 15% 할인된 가격에 만나보세요!
                    </p>
                    <a role="button">지금 할인 받기</a>
                  </div>
                </section>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-1 col-md-1" />
              <div className="col-lg-12 col-md-12">
                <section className="recommendation">
                  <div className="recommendation_item">product</div>
                  <div className="recommendation_item">product</div>
                  <div className="recommendation_item">product</div>
                  <div className="recommendation_item">product</div>
                  <div className="recommendation_item">product</div>
                  <div className="recommendation_item">product</div>
                  <div className="recommendation_item">product</div>
                  <div className="recommendation_item">product</div>
                </section>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-1 col-md-1" />
              <div className="col-lg-6 col-md-6">
                <section className="new_product left">
                  <div className="이미지 기준 포지션 앱솔루트">
                    <button type="button" className="label_btn" />
                    <div className="label">
                      <a>
                        <div className="product_info">
                          <span>new</span>
                          <span>제품명 복슬리브</span>
                          <span>카테고리 조명</span>
                        </div>
                        <div>
                          <a>
                            <i className="ic-chevron"></i>
                          </a>
                        </div>
                        <div className="price">
                          <span>￦</span>
                          <span>99,900</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-lg-6 col-md-6">
                <section className="new_product right"></section>
              </div>
            </div>
          </div>
        </article>
      </main>
    );
  }
}

export default Main;
