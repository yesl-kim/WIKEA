import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SideModal from '../SideModal/SideModal';
import { Category } from '../Category';
import { SubCategory } from '../SubCategory';
import { API } from '../../config';
import './MainNavModal.scss';

const MainNavModal = ({ sideModalOn, handleSideModalOn }) => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState({});
  const [activeCategory, setActiveCategory] = useState('');

  useEffect(() => {
    async function getMenus() {
      const menus = await fetch(API.CATEGORY_TEST);
      const menu = await menus.json();
      setCategories(menu.category);
      setSubCategories(
        menu.category.reduce(
          (sub, c) => ({
            ...sub,
            [c.korean_name]: c.sub_category,
          }),
          {}
        )
      );
    }
    getMenus();
  }, []);

  const handleSubNavOn = name => {
    setActiveCategory(name);
  };

  return (
    <SideModal
      direction="left"
      on={sideModalOn}
      handleSideModalOn={handleSideModalOn}
    >
      <Link to="/" className="main_nav_logo">
        <img alt="wikea logo" src="/images/logo.png" />
      </Link>
      <div className="main_nav_box">
        <Category
          list={categories}
          handleClick={handleSubNavOn}
          activeItem={activeCategory}
        />
        {!!activeCategory && (
          <SubCategory
            title={activeCategory}
            list={subCategories[activeCategory]}
            handleSideModalOn={handleSideModalOn}
          />
        )}
      </div>
    </SideModal>
  );
};

export default MainNavModal;
