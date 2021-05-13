import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <div className="row">
          <nav>
            <h1 className="visually-hidden">메뉴바</h1>
            <img alt="logo" src="/images/Detail/logo.png" />
            <div className="lg-only options">
              <a href="/">
                <span>모든제품</span>
              </a>
              <a href="/">
                <span>디지털 쇼룸</span>
              </a>
            </div>
            <ul className="nav-menu-group">
              <li>
                <a href="/">
                  <i className="ic-cart1 lg-only" />
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="ic-user" />
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="ic-heart" />
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="ic-cart" />
                </a>
              </li>
              <li>
                <button className="col-lg-1">
                  <i className="ic-menu" />
                </button>
              </li>
            </ul>
            <div className="searchBox">
              <i className="ic-search" />
              <input
                aria-label="제품 및 아이디어, 신제품 검색"
                placeholder="검색어 입력"
                type="search"
              />
              <button>
                <i className="ic-store" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
