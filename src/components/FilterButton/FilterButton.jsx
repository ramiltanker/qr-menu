import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// Styles
import styles from './FilterButton.module.css';
// Styles

const FilterButton = ({ ruName, enName, path, screenWidth, isBurgerMenuActive, setIsBurgerMenuActive }) => {
  const [buttonHover, setButtonHover] = React.useState();
  const [buttonActive, setButtonActive] = React.useState();

  const location = useLocation();

  const handleButtonHover = () => {
    setButtonHover(true);
  };

  const handleButtonUnHover = () => {
    setButtonHover(false);
  };

  const handleClickButton = () => {
    setIsBurgerMenuActive(false);
  };

  React.useEffect(() => {
    if (path === location.pathname) setButtonActive(true);
    else setButtonActive(false);
  }, [location]);

  return (
    <Link
      className={`${screenWidth < 635 ? styles.button_mobile : styles.button} ${
        buttonHover || buttonActive
          ? screenWidth < 635
            ? styles.button_mobile_hover
            : styles.button_hover
          : screenWidth < 635
          ? styles.button_mobile
          : styles.button
      }`}
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
      <p
        className={`${screenWidth < 635 ? styles.name_en_mobile : styles.name_en} ${
          buttonHover || buttonActive
            ? screenWidth < 635
              ? styles.name_en_active_mobile
              : styles.name_en_active
            : screenWidth < 635
            ? styles.name_en_mobile
            : styles.name_en
        }`}
      >
        {enName}
      </p>
      <p
        className={`${screenWidth < 635 ? styles.name_ru_mobile : styles.name_ru} ${
          buttonHover || buttonActive
            ? screenWidth < 635
              ? styles.name_ru_active_mobile
              : styles.name_ru_active
            : screenWidth < 635
            ? styles.name_ru_mobile
            : styles.name_ru
        }`}
      >
        {ruName}
      </p>
    </Link>
  );
};

export default FilterButton;
