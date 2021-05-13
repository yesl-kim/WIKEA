/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
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
        '조명',
        '러그/매트/데크',
      ],
    };
  }

  render() {
    const { handleNavOn, on } = this.props;
    return (
      <SideModal direction="left" handleSideModalOn={handleNavOn} on={on}>
        <nav className="nav">
          <h1 className="visually-hidden">메인 네비게이션</h1>
          <a className="logo">
            <img alt="wikea logo" src="http://placehold.it/90x36" />
          </a>
          <div className="menu_container">
            <h2>모든 제품</h2>
            <ul>
              {this.state.categories.map((category, idx) => (
                <li key={idx}>
                  <a>{category}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </SideModal>
    );
  }
}

export default Nav;
