import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideModal from '../SideModal/SideModal';
import AsideNav from '../AsideNav/AsideNav';
import { API } from '../../config';
import './MainNavModal.scss';

class MainNavModal extends Component {
  constructor() {
    super();
    this.state = {
      isCategoriesClicked: [],
      isSubCategoryOn: false,
      activeSubCategory: '',
      categories: [],
    };
  }

  componentDidMount() {
    fetch(API.CATEGORY)
      .then(categories => categories.json())
      .then(res => {
        this.setState({
          isCategoriesClicked: res.category.map(cat => false),
          categories: res.category,
        });
      });
  }

  handleSubNavOn = (num, name) => {
    this.setState({
      isCategoriesClicked: this.state.isCategoriesClicked.map(
        (el, idx) => idx === num
      ),
      isSubCategoryOn: true,
      activeSubCategory: name,
    });
  };

  render() {
    const { sideModalOn, handleSideModalOn } = this.props;
    const {
      isCategoriesClicked,
      isSubCategoryOn,
      activeSubCategory,
      categories,
    } = this.state;
    const subCategories = {};

    if (categories.length) {
      categories.forEach(
        category =>
          (subCategories[category.korean_name] = category.sub_category)
      );
    }

    return (
      <SideModal
        direction="left"
        on={sideModalOn}
        handleSideModalOn={handleSideModalOn}
      >
        <Link to="/" className="main_nav_logo">
          <img alt="wikea logo" src="http://placehold.it/90x36" />
        </Link>
        <div className="main_nav_box">
          <AsideNav
            type="main"
            isClicked={isCategoriesClicked}
            on={isSubCategoryOn}
            title="모든 제품"
            list={categories}
            handleClick={this.handleSubNavOn}
          >
            <div className="menu_promotion">
              <span>최근 본 제품</span>
              <ul className="promotion_list">
                <li>
                  <Link to="/lists/">
                    <img alt="조명" src="/images/products/lamp/10-r.png" />
                  </Link>
                </li>
              </ul>
            </div>
          </AsideNav>
          {isSubCategoryOn && (
            <AsideNav
              type="sub"
              on={isSubCategoryOn}
              title={activeSubCategory}
              list={subCategories[activeSubCategory]}
              handleSideModalOn={handleSideModalOn}
            >
              <div className="menu_promotion">
                <Link to="/">
                  <span className="promotion_image">
                    <img
                      alt="지속가능한 LED 전구 구매 가이드"
                      src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    />
                  </span>
                  <span>지속가능한 LED 전구 구매 가이드</span>
                </Link>
              </div>
            </AsideNav>
          )}
        </div>
      </SideModal>
    );
  }
}

export default MainNavModal;
