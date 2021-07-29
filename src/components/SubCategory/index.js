import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import './index.scss';

export const SubCategory = ({
  isOpened,
  title,
  list,
  handleSideModalOn,
  children,
}) => {
  const history = useHistory();
  const goToList = subCategoryName => {
    history.push(`/lists/${subCategoryName}`);
    handleSideModalOn();
  };

  return (
    <nav className={title ? 'sub_category on' : 'sub_category'}>
      <h2 className="nav_title">{title}</h2>
      <ul aria-label={`${title} 하위 메뉴`} className="menu_container">
        <li>전체 보기</li>
        {!!list &&
          list.map(item => (
            <li
              key={item.id}
              role="button"
              onClick={() => goToList(item.english_name)}
            >
              {item.korean_name}
            </li>
          ))}
      </ul>
      <div className="menu_promotion">
        <Link to="/">
          <span className="promotion_image">
            <img
              alt="지속가능한 LED 전구 구매 가이드"
              src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            />
          </span>
          <span>지속가능한 LED 전구 구매 가이드</span>
        </Link>
      </div>
    </nav>
  );
};
