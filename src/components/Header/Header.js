import React from 'react';
import Nav from '../Nav/Nav';
import './Header.scss';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isNavOn: false,
    };
  }

  handleNavOn = () => {
    this.setState({
      isNavOn: !this.state.isNavOn,
    });
  };
  render() {
    const { isNavOn } = this.state;
    return (
      <>
        <div className="container">
          <div className="row">
            <header>
              <img alt="logo" src="/images/Detail/logo.png" />
              <div className="lg-only options">
                <a href="/">
                  <span>모든제품</span>
                </a>
                <a href="/">
                  <span>디지털 쇼룸</span>
                </a>
              </div>

              <div className="nav-menu-group">
                <a href="/">
                  <i className="ic-cart1 lg-only" />
                </a>
                <a href="/">
                  <i className="ic-user" />
                </a>
                <a href="/">
                  <i className="ic-heart" />
                </a>
                <a href="/">
                  <i className="ic-cart" />
                </a>
                <button className="col-lg-1" onClick={this.handleNavOn}>
                  <i className="ic-menu" />
                </button>
              </div>

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
            </header>
          </div>
        </div>
        <Nav handleNavOn={this.handleNavOn} on={isNavOn} />
      </>
    );
  }
}

export default Header;
