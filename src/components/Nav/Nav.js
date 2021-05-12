/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      category: [
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
    return (
      <nav className="nav">
        <h1 className="visually-hidden">메인 네비게이션</h1>
        <div className="menu_top">
          <button type="button" className="close">
            <i className="ic-close" />
          </button>
          <a className="logo">
            <img alt="wikea logo" src="http://placehold.it/90x36" />
          </a>
        </div>
        <div className="menu_container">
          <h2>모든 제품</h2>
          <ul>
            <li className="bold_item">
              <a>지속가능한 제품</a>
            </li>
            {this.state.category.map((c, idx) => (
              <li key={idx}>
                <a>{c}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
