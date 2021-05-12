import React from 'react';
import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb';
import Product from '../../../../components/Product/Product';
import ScrollBox from '../../../../components/ScrollBox/ScrollBox';
import ItemDetails from './ItemDetails';
import ItemImg from './ItemImg';
import ItemInfo from './ItemInfo';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="grid-container">
          <Breadcrumb />
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-8 ">
              <ItemImg />
              <ItemDetails />
            </div>
            <div className="col-sm-4 col-md-12 col-lg-4 ">
              <ItemInfo />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-1 lg-only" />
            <div className="col-sm-4 col-lg-8"></div>
          </div>
          <div className="row">
            <div className="col-lg-1 lg-only" />
            <div className="col-lg-12">
              <ScrollBox>
                <div className="recommandation searched">
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
              </ScrollBox>
              <ScrollBox>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
              </ScrollBox>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
