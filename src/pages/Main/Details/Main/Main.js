import React from 'react';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="main ">
        <div className="container">
          <div className="row nav-container">
            <nav>
              <ol>
                <li>
                  <a href="/">
                    <span>... &nbsp; &gt; &nbsp;</span>
                  </a>
                </li>
                <li className="visually-hidden ">
                  <a href="/">
                    <span>제품 &nbsp; &gt; &nbsp;</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>화분/식물 &nbsp; &gt; &nbsp;</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>물뿌리개</span>
                  </a>
                </li>
              </ol>
            </nav>
          </div>
          <div className="row item-img">
            <img
              alt="상품이미지"
              src="https://www.ikea.com/kr/ko/images/products/sesamfroen-plant-mister-clear-glass__0958896_pe809495_s5.jpg?f=xl"
            />
            <div className="sm-slide lg-hidden"></div>
          </div>
          <div className="item-info">
            <p>NEW</p>
            <div className="item-primary-info">
              <h1>
                <span>SESAMFRÖN 세삼프뢴</span>
                <p>화초물뿌리개, 유리, 25 cl</p>
              </h1>
              <div className="price">W 4,900</div>
              <div className="rating-star">
                <i className="ic-star" />
                <i className="ic-star" />
                <i className="ic-star" />
                <i className="ic-star" />
                <i className="ic-star" />
                (2)
              </div>
            </div>
            <div className="item-btn-group">
              <button>구매하기</button>
              <button>
                <i className="ic-heart" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
