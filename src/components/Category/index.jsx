import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export const Category = ({ list, handleClick, activeItem, children }) => {
  return (
    <nav className={activeItem ? `category on` : `category`}>
      <h2 className="nav_title">모든 제품</h2>
      <ul aria-label="모든 제품 카테고리" className="menu_container">
        <li>지속가능한 제품</li>
        {list.map(item => (
          <li
            key={item.id}
            role="button"
            onClick={() => handleClick(item.korean_name)}
          >
            {item.korean_name}
            <i
              className={
                activeItem === item.korean_name ? 'ic-chevron on' : 'ic-chevron'
              }
            />
          </li>
        ))}
      </ul>
      <div className="menu_promotion">
        <span>최근 본 제품</span>
        <ul className="promotion_list">
          <li>
            <Link to="/lists/">
              <img alt="조명" src="/images/products/lamps/10-r png.png" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
