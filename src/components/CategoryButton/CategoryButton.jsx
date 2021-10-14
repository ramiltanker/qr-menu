import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Redux
import { GET_SUBCATEGORY_FROM_BUTTON, DELETE_CATEGORY_FROM_BUTTON } from '../../redux/actions/filter';

import { useDispatch } from 'react-redux';
// Redux

// Styles
import styles from './CategoryButton.module.css';
// Styles

function CategoryButton({ ruName, enName, path, isBurgerMenuActive, setIsBurgerMenuActive, subCategories }) {
  const [buttonHover, setButtonHover] = React.useState();
  const [buttonActive, setButtonActive] = React.useState();

  const location = useLocation();

  const dispatch = useDispatch();

  const handleButtonHover = () => {
    setButtonHover(true);
  };

  const handleButtonUnHover = () => {
    setButtonHover(false);
  };

  const handleClickButton = () => {
    if (subCategories) {
      dispatch({ type: GET_SUBCATEGORY_FROM_BUTTON, subCategory: subCategories });
      return;
    }
    dispatch({ type: DELETE_CATEGORY_FROM_BUTTON });
    setIsBurgerMenuActive(false);
  };

  React.useEffect(() => {
    if (path === location.pathname) setButtonActive(true);
    else setButtonActive(false);
  }, [location]);

  return (
    <Link
      className={`${styles.button} ${buttonActive ? styles.button_active : ''}`}
      onMouseEnter={handleButtonHover}
      onMouseLeave={handleButtonUnHover}
      onClick={
        isBurgerMenuActive
          ? handleClickButton
          : () => {
              return;
            }
      }
      to={path}
    >
      <p className={`${styles.name_en} ${buttonActive | buttonHover ? styles.name_en_active : ''}`}>{enName}</p>
      <p className={`${styles.name_ru} ${buttonActive | buttonHover ? styles.name_ru_active : ''}`}>{ruName}</p>
    </Link>
  );
}

export default CategoryButton;
