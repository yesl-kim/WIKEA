import React from 'react';
import Breadcrumb from '../../../../components/Breadcrumb/Breadcrumb';
import ItemDetails from './ItemDetails/ItemDetails';
import ItemImg from './ItemImg/ItemImg';
import ItemInfo from './ItemInfo/ItemInfo';
import ScrollBox from '../../../../components/ScrollBox/ScrollBox';
import Product from '../../../../components/Product/Product';
import './DetailsMain.scss';

class DetailsMain extends React.Component {
  render() {
    const { handleModal, handleSideModal, product, details, recommended } =
      this.props;
    return (
      <main className="detail_main">
        <div className="grid-container">
          <Breadcrumb />
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-sm-4 col-md-12 col-lg-8 ">
              <ItemImg product={product} handleModal={handleModal} />
              <ItemDetails
                handleSideModal={handleSideModal}
                product={product}
                details={details}
              />
            </div>
            <div className="col-sm-4 col-md-12 col-lg-4 ">
              <ItemInfo product={product} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-1 lg-only" />
            <div className="col-lg-12">
              <ScrollBox title="추천 제품">
                {recommended.map(recommended => (
                  <li className="item">
                    <Product product={recommended} />
                  </li>
                ))}
              </ScrollBox>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default DetailsMain;
