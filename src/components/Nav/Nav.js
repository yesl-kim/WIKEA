/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
  render() {
    const { on, type, title, list, handleClick, children } = this.props;
    return (
      <nav className={on ? `nav ${type}_menu on` : `nav ${type}_menu`}>
        <h2 className="nav_title">{title}</h2>
        <ul aria-label={`${title} 하위 메뉴`} className="menu_container">
          <li>
            <Link to="/">
              {type === 'main' ? '지속가능한 제품' : '전체 보기'}
            </Link>
          </li>
          {!!list.length &&
            list.map(item => (
              <li key={item.id}>
                <Link
                  to="/"
                  role="button"
                  name={item.korean_name}
                  onClick={handleClick}
                >
                  {item.korean_name}
                </Link>
                <i className="ic-chevron" />
              </li>
            ))}
        </ul>
        {children}
      </nav>
    );
  }
}

export default Nav;
