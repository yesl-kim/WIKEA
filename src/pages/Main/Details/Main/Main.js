import React from 'react';
import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb';
// import Product from '../../../../components/Product/Product';
import ScrollBox from '../../../../components/ScrollBox/ScrollBox';
import Star from '../../../../components/Star/Star.js';
import ItemDetails from './ItemDetails/ItemDetails';
import ItemImg from './ItemImg/ItemImg';
import ItemInfo from './ItemInfo/ItemInfo';
import './Main.scss';

class Main extends React.Component {
  render() {
    const { handleModal, popUpLiked, isLiked, products, details } = this.props;

    return (
      <div className="main">
        <div className="grid-container">
          <Breadcrumb />
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-sm-4 col-md-12 col-lg-8 ">
              <ItemImg details={details} handleModal={handleModal} />
              <ItemDetails details={details} />
            </div>
            <div className="col-sm-4 col-md-12 col-lg-4 ">
              <ItemInfo
                details={details}
                popUpLiked={popUpLiked}
                isLiked={isLiked}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-1 lg-only" />
            <div className="col-lg-12">
              <ScrollBox>
                <div className="recommandation">
                  <ol className="item-lists">
                    {products.map((item, idx) => (
                      <li key={idx}>
                        <button>
                          <i className="ic-heart" />
                        </button>
                        <img alt="상품미리보기" src={item.url} />
                        <div className="item-primary-info">
                          <h1>
                            <span>{item.name}</span>
                            <p>{item.desc}</p>
                          </h1>
                          <div className="price">W {item.price}</div>
                          <Star />
                        </div>
                        <button>
                          <i className="ic-cart" />
                        </button>
                      </li>
                    ))}
                  </ol>
                </div>
              </ScrollBox>
              <ScrollBox>
                <div className="recommandation">
                  <ol className="item-lists">
                    {products.map((item, idx) => (
                      <li key={idx}>
                        <button>
                          <i className="ic-heart" />
                        </button>
                        <img alt="상품미리보기" src={item.url} />
                        <div className="item-primary-info">
                          <h1>
                            <span>{item.name}</span>
                            <p>{item.desc}</p>
                          </h1>
                          <div className="price">W {item.price}</div>
                          <Star />
                        </div>
                        <button>
                          <i className="ic-cart" />
                        </button>
                      </li>
                    ))}
                  </ol>
                </div>
              </ScrollBox>
              <ScrollBox>
                <div className="recommandation">
                  <ol className="item-lists">
                    {products.map((item, idx) => (
                      <li key={idx}>
                        <button>
                          <i className="ic-heart" />
                        </button>
                        <img alt="상품미리보기" src={item.url} />
                        <div className="item-primary-info">
                          <h1>
                            <span>{item.name}</span>
                            <p>{item.desc}</p>
                          </h1>
                          <div className="price">W {item.price}</div>
                          <Star />
                        </div>
                        <button>
                          <i className="ic-cart" />
                        </button>
                      </li>
                    ))}
                  </ol>
                </div>
              </ScrollBox>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
