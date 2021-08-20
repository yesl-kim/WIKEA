import React, { useEffect, useState } from 'react';
import Message from './Message';
import MainNavModal from '../MainNavModal/MainNavModal';
import { Link } from 'react-router-dom';
import { debounce } from '../../util';
import './Nav.scss';

const Nav = () => {
  const [isMainNavModalOn, setIsMainNavModalOn] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', debounceScroll);
    return () => document.removeEventListener('scroll', debounceScroll);
  }, []);

  const handleScroll = () => {
    const currentScrollTop = Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    const isScrollingDown = scrollTop < currentScrollTop;
    setHide(isScrollingDown);
    setScrollTop(currentScrollTop);
  };

  const debounceScroll = debounce(handleScroll, 50);

  const handleMainNavModalOn = () => {
    setIsMainNavModalOn(prev => !prev);
  };

  return (
    <div className={`nav_wrap ${hide && 'hide'}`}>
      <Message className="message_wrap" />
      <nav className="nav_menu">
        <h1 className="visually-hidden">메뉴바</h1>
        <img className="logo" alt="logo" src="/images/logo.png" />
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
            <Link to="/signin">
              <i className="ic-user" />
            </Link>
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
            <button className="col-lg-1" onClick={handleMainNavModalOn}>
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
        <MainNavModal
          sideModalOn={isMainNavModalOn}
          handleSideModalOn={handleMainNavModalOn}
        />
      </nav>
      <MainNavModal
        sideModalOn={isMainNavModalOn}
        handleSideModalOn={handleMainNavModalOn}
      />
    </div>
  );
};

export default Nav;

// const NAV = 132;
