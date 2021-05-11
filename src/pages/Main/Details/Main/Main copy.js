import React from 'react';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="main ">
        <div className="container col-lg-13 col-md-12 col-sm-4 route">
          <p>... 제품 화분/식물 물뿌리개 SESAMFRÖN 세삼프뢴 화초물뿌리개</p>
        </div>
        <article className="col-lg-13 col-md-12 col-sm-4 ">
          <div className="row">
            <div className="col-sm-4 col-md-7 col-lg-8">
              <div className="row">
                <img
                  src="https://www.ikea.com/kr/ko/images/products/sesamfroen-plant-mister-clear-glass__0958896_pe809495_s5.jpg?f=sg"
                  alt="상품"
                />
                <img
                  src="https://www.ikea.com/kr/ko/images/products/sesamfroen-plant-mister-clear-glass__0958896_pe809495_s5.jpg?f=sg"
                  alt="상품"
                />
              </div>
              <div className="row">
                <img
                  src="https://www.ikea.com/kr/ko/images/products/sesamfroen-plant-mister-clear-glass__0958896_pe809495_s5.jpg?f=sg"
                  alt="상품"
                />
                <img
                  src="https://www.ikea.com/kr/ko/images/products/sesamfroen-plant-mister-clear-glass__0958896_pe809495_s5.jpg?f=sg"
                  alt="상품"
                />
              </div>
              <div className="row">
                <img
                  src="https://www.ikea.com/kr/ko/images/products/sesamfroen-plant-mister-clear-glass__0958896_pe809495_s5.jpg?f=sg"
                  alt="상품"
                />
                <img
                  src="https://www.ikea.com/kr/ko/images/products/sesamfroen-plant-mister-clear-glass__0958896_pe809495_s5.jpg?f=sg"
                  alt="상품"
                />
              </div>
              <div className="img1 col-log-4"></div>
              이미지
            </div>

            <div className="col-sm-4 col-md-4 col-lg-4">상품 이름</div>
          </div>
        </article>
      </div>
    );
  }
}

export default Main;
