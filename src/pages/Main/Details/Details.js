import React from 'react';
import DetailsMain from './Main/DetailsMain.js';
import ImgModal from './Modal/ImgModal/ImgModal.js';
import SideModal from '../../../components/SideModal/SideModal.js';
import DetailsModal from '../Details/Modal/DetailsModal/DetailsModal.js';
// 서버 완성될 시, config.js사용
// import '../../../config.js';
// import CartModal from './Modal/CartModal/CartModal.js';
import './Details.scss';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      modalOn: false,
      sideModalOn: false,
      details: [],
      product: [],
      recommended: [],
    };
  }

  // 목데이터 용 패치
  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`/data/detailsData/test.json`)
      .then(res => res.json())
      .then(product =>
        this.setState({
          product: product.product[0],
          details: product.product[0].descriptions,
        })
      );

    fetch('/data/listmockdata.json')
      .then(res => res.json())
      .then(res =>
        this.setState({
          recommended: res.recommend_product,
        })
      );
  }

  //서버 연결 && 동적라우팅 시, 주석 해제
  componentDidUpdate(prevProps) {
    const { id } = this.props.match.params;

    if (prevProps.match.params.id !== this.props.match.params.id) {
      fetch(`http://172.30.1.23:5000/product/detail/?id=${id}`)
        .then(res => res.json())
        .then(product =>
          this.setState({
            product: product.product[0],
            details: product.product[0].descriptions,
          })
        );
    }
  }

  handleModal = () => {
    const { modalOn } = this.state;
    this.setState({
      modalOn: !modalOn,
    });
  };

  handleSideModal = () => {
    const { sideModalOn } = this.state;
    this.setState({
      sideModalOn: !sideModalOn,
    });
  };

  render() {
    const { modalOn, sideModalOn, details, product, recommended } = this.state;
    console.log(this.props);
    return (
      <>
        <DetailsMain
          details={details}
          product={product}
          recommended={recommended}
          handleModal={this.handleModal}
          handleSideModal={this.handleSideModal}
        />
        {modalOn && (
          <ImgModal product={product} handleModal={this.handleModal} />
        )}

        <SideModal
          handleSideModalOn={this.handleSideModal}
          on={sideModalOn}
          direction="right"
        >
          {/* <CartModal /> */}
          {sideModalOn && <DetailsModal details={details} />}
        </SideModal>
      </>
    );
  }
}

export default Details;
