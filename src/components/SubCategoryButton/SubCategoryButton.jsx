import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Styles
import styles from './SubCategoryButton.module.css';
// Styles

function SubCategoryButton({
  ruName,
  enName,
  path,
  isBurgerMenuActive,
  handleSwitchBurgerMenu,
  setIsBurgerMenuActive
}) {
  const [buttonHover, setButtonHover] = React.useState();
  const [buttonActive, setButtonActive] = React.useState();

  const handleButtonHover = () => {
    setButtonHover(true);
  };

  const handleButtonUnHover = () => {
    setButtonHover(false);
  };

  const handleClickButton = () => {
    setIsBurgerMenuActive(false);
  };

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

export default SubCategoryButton;
