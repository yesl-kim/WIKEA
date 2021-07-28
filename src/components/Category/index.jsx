import React from 'react';
import './index.scss';

export const Category = ({ list, handleClick, clickedItem, children }) => {
  return (
    <nav className={clickedItem ? `category on` : `category`}>
      <h2 className="aside_nav_title">모든 제품</h2>
      <ul aria-label="모든 제품 카테고리" className="menu_container">
        <li>지속가능한 제품</li>
        {list.map((item, idx) => (
          <li
            key={item.id}
            role="button"
            onClick={() => handleClick(idx, item.korean_name)}
          >
            {item.korean_name}
            <i
              className={
                clickedItem === item.korean_name
                  ? 'ic-chevron on'
                  : 'ic-chevron'
              }
            />
          </li>
        ))}
      </ul>
      {children}
    </nav>
  );
};
