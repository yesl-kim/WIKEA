/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideModal from '../SideModal/SideModal';
import { API } from '../../config';
import './Nav.scss';

class MainNav extends Component {
  constructor() {
    super();
    this.state = {
      isMainNavOn: false,
      categories: [],
      subCategories: {},
    };
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({
      isMainNavOn: true,
    });
  };

  render() {
    const { isMainNavOn, categories, subCategories } = this.state;
    console.log(categories, subCategories);
    return (
      <SideModal direction="left" on={true}>
        <div className="main_nav_box">
          <Link to="/" className="logo">
            <img alt="wikea logo" src="http://placehold.it/90x36" />
          </Link>
          <nav className={isMainNavOn ? 'nav main_menu on' : 'nav main_menu'}>
            <h2 className="nav_title">모든 제품</h2>
            <ul aria-label="모든 제품 하위 메뉴" className="menu_container">
              <li>지속가능한 제품</li>
              <li>
                <Link to="/" role="button" onClick={this.handleClick}>
                  조명
                </Link>
                <i className="ic-chevron" />
                <nav aria-hidden="true" className="nav sub_menu">
                  <h2 className="nav_title">조명</h2>
                  <ul aria-label="조명 하위 메뉴" className="menu_container">
                    <li>
                      <Link to="/">시스템 조명</Link>
                    </li>
                    <li>
                      <Link to="/">LED 조명</Link>
                    </li>
                    <li>
                      <Link to="/">탁상 조명</Link>
                    </li>
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
              </li>
              <li>
                <Link to="/" role="button" onClick={this.handleClick}>
                  침대/매트리스
                </Link>
                <i className="ic-chevron" />
              </li>
              <li>
                <Link to="/" role="button" onClick={this.handleClick}>
                  수납/정리
                </Link>
                <i className="ic-chevron" />
              </li>
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
        </div>
      </SideModal>
    );
  }
}

export default MainNav;
