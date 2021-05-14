/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideModal from '../SideModal/SideModal';
import './Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      categories: [
        '지속가능한 제품',
        '홈스마트',
        '가구',
        '침대/매트리스',
        '어린이 WIKEA',
        '수납/정리',
        '주방가구',
        '텍스타일',
        '홈데코/장식품',
        '욕실',
        '야외용 제품',
        '러그/매트/데크',
      ],
      subCategories: [
        '전체보기',
        '일반조명',
        'LED 전구',
        '장식 조명',
        '시스템 조명',
        '스마트 조명',
        '야외용 조명',
        '욕실 조명',
      ],
    };
  }

  handleClick = e => {
    e.preventDefault();
    console.log(e.target.className);
  };

  openSubMenu = () => {};

  render() {
    const { categories, subCategories } = this.state;
    return (
      <SideModal direction="left" on={true}>
        <div className="main_nav_box">
          <Link to="/" className="logo">
            <img alt="wikea logo" src="http://placehold.it/90x36" />
          </Link>
          <nav className="nav">
            <h1 className="visually-hidden">상위 카테고리</h1>
            <div className="menu_container">
              <h2>모든 제품</h2>
              <ul>
                {categories.map((category, idx) => (
                  <li key={idx}>
                    <Link to="/" role="button">
                      {category}
                    </Link>
                    <i className="ic-chevron" />
                  </li>
                ))}
                <li key="light" onClick={this.openSubMenu}>
                  <Link to="/" role="button" onClick={this.handleClick}>
                    조명
                  </Link>
                  <i className="ic-chevron" />
                </li>
              </ul>
            </div>
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
          <nav className="nav sub_menu">
            <h1 className="visually-hidden">하위 카테고리</h1>
            <div className="menu_container">
              <h2>조명</h2>
              <ul>
                {subCategories.map((category, idx) => (
                  <li key={idx}>
                    <Link to="/">{category}</Link>
                  </li>
                ))}
              </ul>
            </div>
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
        </div>
      </SideModal>
    );
  }
}

export default Nav;
