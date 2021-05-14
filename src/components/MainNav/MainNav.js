/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideModal from '../SideModal/SideModal';
import { API } from '../../config';
import './MainNav.scss';

class MainNav extends Component {
  constructor() {
    super();
    this.state = {
      activeSubCategory: '',
      categories: [],
      subCategories: {},
    };
  }

  componentDidMount() {
    fetch(API.CATEGORY)
      .then(res => res.json())
      .then(res => {
        this.setState({
          categories: Object.keys(res),
          subCategories: res,
        });
      });
  }

  handleClick = e => {
    const { name } = e.target;
    e.preventDefault();
    this.setState({
      activeSubCategory: name,
    });
  };

  render() {
    const { activeSubCategory, categories, subCategories } = this.state;
    return (
      <SideModal direction="left" on={true}>
        <div className="main_nav_box">
          <Link to="/" className="logo">
            <img alt="wikea logo" src="http://placehold.it/90x36" />
          </Link>
          <nav className="nav">
            <h2 className="nav_title">모든 제품</h2>
            <ul aria-label="모든 제품 하위 메뉴" className="menu_container">
              <li>
                <Link to="/">지속가능한 제품</Link>
              </li>
              {!!categories.length &&
                categories.map((category, idx) => (
                  <li key={category + idx}>
                    <Link
                      to="/"
                      role="button"
                      name={category}
                      onClick={this.handleClick}
                    >
                      {category}
                    </Link>
                    <i className="ic-chevron" />
                  </li>
                ))}
            </ul>

            <div className="menu_promotion">
              <span>최근 본 제품</span>
              <ul className="promotion_list">
                <li>
                  <Link to="/">
                    <img
                      alt="탁자"
                      src="https://www.ikea.com/kr/ko/images/products/voxloev-dining-table-light-bamboo__0997396_pe822660_s5.jpg?f=xxxs"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          {!!subCategories[activeSubCategory] && (
            <nav className="nav sub_menu">
              <h2 className="nav_title">{activeSubCategory}</h2>
              <ul aria-label="조명 하위 메뉴" className="menu_container">
                <li>
                  <Link to="/">전체 보기</Link>
                </li>
                {subCategories[activeSubCategory].map((category, idx) => (
                  <li key={activeSubCategory + idx}>
                    <Link to="/">{category}</Link>
                  </li>
                ))}
              </ul>
              <div className="menu_promotion">
                <Link to="/">
                  <span className="promotion_image">
                    <img
                      alt="지속가능한 LED 전구 구매 가이드"
                      src="https://www.ikea.com/images/led-e6fd0a8b05e35175cd665abc61b80d61.jpg?f=xxxl"
                    />
                  </span>
                  <span>지속가능한 LED 전구 구매 가이드</span>
                </Link>
              </div>
            </nav>
          )}
        </div>
      </SideModal>
    );
  }
}

export default MainNav;
