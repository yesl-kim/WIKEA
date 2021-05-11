import React from 'react';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="main ">
        <div className="container">
          <div className="row">
            <nav className="nav-container">
              <ol>
                <li>
                  <a href="/">
                    <span>... &nbsp; &gt; &nbsp;</span>
                  </a>
                </li>
                <li className="lg-only">
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
                <li className="lg-only">
                  <a href="/">
                    <span> &nbsp;&gt; SESAMFRÖN 세삼프뢴 &nbsp;</span>
                  </a>
                </li>
              </ol>
            </nav>
            <hr />
          </div>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-8 ">
              <div className="item-img">
                <img
                  alt="상품이미지"
                  src="https://www.ikea.com/kr/ko/images/products/sesamfroen-plant-mister-clear-glass__0958896_pe809495_s5.jpg?f=xl"
                />
                <img
                  className="lg-only"
                  alt="상품이미지"
                  src="https://www.ikea.com/kr/ko/images/products/sesamfroen-plant-mister-clear-glass__0958896_pe809495_s5.jpg?f=xl"
                />
                <img
                  className="lg-only"
                  alt="상품이미지"
                  src="https://www.ikea.com/kr/ko/images/products/sesamfroen-plant-mister-clear-glass__0958896_pe809495_s5.jpg?f=xl"
                />
                <img
                  className="lg-only"
                  alt="상품이미지"
                  src="https://www.ikea.com/kr/ko/images/products/sesamfroen-plant-mister-clear-glass__0958896_pe809495_s5.jpg?f=xl"
                />
                <img
                  className="lg-only"
                  alt="상품이미지"
                  src="https://www.ikea.com/kr/ko/images/products/sesamfroen-plant-mister-clear-glass__0958896_pe809495_s5.jpg?f=xl"
                />
              </div>
              <div className="sm-slide lg-hidden"></div>
            </div>
            <div className="col-sm-4 col-md-12 col-lg-4 ">
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
                    <i className="ic-heart" aria-label="위시리스트에 추가" />
                  </button>
                </div>
                <div className="item-availability">
                  <div className="stock-check">
                    <i className="ic-cart1" />
                    <span>배송 여부는 결제 단계에서 확인하실 수 있습니다.</span>
                  </div>
                  <hr />
                  <div className="stock-check">
                    <i className="ic-store" />
                    <a href="/">매장 재고 및 재입고 날짜 확인</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-1 lg-only"></div>
            <div className="col-sm-4 col-lg-8">
              <div className="item-details">
                <div className="item-summary">
                  <span>제품 번호</span>
                  <span>064.881.87</span>
                </div>
                <hr />
                <button className="item-information box">
                  <span>제품 설명</span>
                </button>
                <hr />
                <button className="item-size box">
                  <span>제품 크기</span>
                </button>
                <hr />
                <button className="item-rating box">
                  <span>상품평</span>
                  <div className="rating-star">
                    <i className="ic-star" />
                    <i className="ic-star" />
                    <i className="ic-star" />
                    <i className="ic-star" />
                    <i className="ic-star" />
                    (2)
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="recommandation similar">
            <h3>유사한 제품</h3>
            <ol className="item-lists">
              <li>
                <button>
                  <i className="ic-heart" />
                </button>
                <img
                  alt="상품미리보기"
                  src="https://www.ikea.com/kr/ko/images/products/socker-greenhouse-white__0635683_pe697307_s5.jpg?f=xx"
                />
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
                  <p>기타 옵션</p>
                </div>
                <button>
                  <i className="ic-cart" />
                </button>
              </li>

              <li>
                <button>
                  <i className="ic-heart" />
                </button>
                <img
                  alt="상품미리보기"
                  src="https://www.ikea.com/kr/ko/images/products/socker-greenhouse-white__0635683_pe697307_s5.jpg?f=xx"
                />
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
                  <p>기타 옵션</p>
                </div>
                <button>
                  <i className="ic-cart" />
                </button>
              </li>
              <li>
                <button>
                  <i className="ic-heart" />
                </button>
                <img
                  alt="상품미리보기"
                  src="https://www.ikea.com/kr/ko/images/products/socker-watering-can-in-outdoor-galvanised__0635850_pe697471_s5.jpg?f=s"
                />
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
                  <p>기타 옵션</p>
                </div>
                <button>
                  <i className="ic-cart" />
                </button>
              </li>
              <li>
                <button>
                  <i className="ic-heart" />
                </button>
                <img
                  alt="상품미리보기"
                  src="https://www.ikea.com/kr/ko/images/products/socker-greenhouse-white__0635683_pe697307_s5.jpg?f=xx"
                />
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
                  <p>기타 옵션</p>
                </div>
                <button>
                  <i className="ic-cart" />
                </button>
              </li>
              <li>
                <button>
                  <i className="ic-heart" />
                </button>
                <img
                  alt="상품미리보기"
                  src="https://www.ikea.com/kr/ko/images/products/socker-greenhouse-white__0635683_pe697307_s5.jpg?f=xx"
                />
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
                  <p>기타 옵션</p>
                </div>
                <button>
                  <i className="ic-cart" />
                </button>
              </li>
              <li>
                <button>
                  <i className="ic-heart" />
                </button>
                <img
                  alt="상품미리보기"
                  src="https://www.ikea.com/kr/ko/images/products/socker-greenhouse-white__0635683_pe697307_s5.jpg?f=xx"
                />
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
                    <span>(2)</span>
                  </div>
                  <p>기타 옵션</p>
                </div>
                <button>
                  <i className="ic-cart" />
                </button>
              </li>
            </ol>
          </div>
          <div className="recommandation searched">
            <h3>함께 본 제품</h3>
            <ol className="item-lists">
              <li>
                <button>
                  <i className="ic-heart" />
                </button>
                <img
                  alt="상품미리보기"
                  src="https://www.ikea.com/kr/ko/images/products/socker-greenhouse-white__0635683_pe697307_s5.jpg?f=xx"
                />
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
                  <p>기타 옵션</p>
                </div>
                <button>
                  <i className="ic-cart" />
                </button>
              </li>
              <li>
                <button>
                  <i className="ic-heart" />
                </button>
                <img
                  alt="상품미리보기"
                  src="https://www.ikea.com/kr/ko/images/products/socker-watering-can-in-outdoor-galvanised__0635850_pe697471_s5.jpg?f=s"
                />
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
                  <p>기타 옵션</p>
                </div>
                <button>
                  <i className="ic-cart" />
                </button>
              </li>
              <li>
                <button>
                  <i className="ic-heart" />
                </button>
                <img
                  alt="상품미리보기"
                  src="https://www.ikea.com/kr/ko/images/products/socker-greenhouse-white__0635683_pe697307_s5.jpg?f=xx"
                />
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
                  <p>기타 옵션</p>
                </div>
                <button>
                  <i className="ic-cart" />
                </button>
              </li>
              <li>
                <button>
                  <i className="ic-heart" />
                </button>
                <img
                  alt="상품미리보기"
                  src="https://www.ikea.com/kr/ko/images/products/socker-greenhouse-white__0635683_pe697307_s5.jpg?f=xx"
                />
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
                  <p>기타 옵션</p>
                </div>
                <button>
                  <i className="ic-cart" />
                </button>
              </li>
              <li>
                <button>
                  <i className="ic-heart" />
                </button>
                <img
                  alt="상품미리보기"
                  src="https://www.ikea.com/kr/ko/images/products/socker-greenhouse-white__0635683_pe697307_s5.jpg?f=xx"
                />
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
                    <span>(2)</span>
                  </div>
                  <p>기타 옵션</p>
                </div>
                <button>
                  <i className="ic-cart" />
                </button>
              </li>
            </ol>
          </div>
          <div className="recommandation buyTogether">
            <h3>잘 어울리는 제품</h3>
            <ol className="item-lists">
              <li>
                <button>
                  <i className="ic-heart" />
                </button>
                <img
                  alt="상품미리보기"
                  src="https://www.ikea.com/kr/ko/images/products/socker-greenhouse-white__0635683_pe697307_s5.jpg?f=xx"
                />
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
                  <p>기타 옵션</p>
                </div>
                <button>
                  <i className="ic-cart" />
                </button>
              </li>
              <li>
                <button>
                  <i className="ic-heart" />
                </button>
                <img
                  alt="상품미리보기"
                  src="https://www.ikea.com/kr/ko/images/products/socker-watering-can-in-outdoor-galvanised__0635850_pe697471_s5.jpg?f=s"
                />
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
                  <p>기타 옵션</p>
                </div>
                <button>
                  <i className="ic-cart" />
                </button>
              </li>
              <li>
                <button>
                  <i className="ic-heart" />
                </button>
                <img
                  alt="상품미리보기"
                  src="https://www.ikea.com/kr/ko/images/products/socker-greenhouse-white__0635683_pe697307_s5.jpg?f=xx"
                />
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
                  <p>기타 옵션</p>
                </div>
                <button>
                  <i className="ic-cart" />
                </button>
              </li>
              <li>
                <button>
                  <i className="ic-heart" />
                </button>
                <img
                  alt="상품미리보기"
                  src="https://www.ikea.com/kr/ko/images/products/socker-greenhouse-white__0635683_pe697307_s5.jpg?f=xx"
                />
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
                  <p>기타 옵션</p>
                </div>
                <button>
                  <i className="ic-cart" />
                </button>
              </li>
              <li>
                <button>
                  <i className="ic-heart" />
                </button>
                <img
                  alt="상품미리보기"
                  src="https://www.ikea.com/kr/ko/images/products/socker-greenhouse-white__0635683_pe697307_s5.jpg?f=xx"
                />
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
                    <span>(2)</span>
                  </div>
                  <p>기타 옵션</p>
                </div>
                <button>
                  <i className="ic-cart" />
                </button>
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
