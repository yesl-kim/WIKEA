import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './AsideNav.scss';

class AsideNav extends Component {
  goToSubCat = subCat => {
    this.props.history.push(`/lists/${subCat}`);
  };

  render() {
    const { on, type, title, list, handleClick, children } = this.props;
    return (
      <nav
        className={on ? `aside_nav ${type}_menu on` : `aside_nav ${type}_menu`}
      >
        <h2 className="aside_nav_title">{title}</h2>
        <ul aria-label={`${title} 하위 메뉴`} className="menu_container">
          <li>{type === 'main' ? '지속가능한 제품' : '전체 보기'}</li>
          {!!list.length &&
            list.map(item => (
              <li
                key={item.id}
                role="button"
                onClick={
                  type === 'main'
                    ? () => handleClick(item.korean_name)
                    : () => this.goToSubCat(item.english_name)
                }
              >
                {item.korean_name}
                <i className="ic-chevron" />
              </li>
            ))}
        </ul>
        {children}
      </nav>
    );
  }
}

export default withRouter(AsideNav);
