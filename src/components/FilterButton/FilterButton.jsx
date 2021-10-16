import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

// Styles
import styles from './FilterButton.module.css';
// Styles

// Redux
import { GET_CATEGORY_FROM_BUTTON } from '../../redux/actions/filter';

import { useDispatch, useSelector } from 'react-redux';
// Redux

const FilterButton = ({
  ruName,
  enName,
  path,
  screenWidth,
  isBurgerMenuActive,
  setIsBurgerMenuActive,
  categories,
  handleSwitchBurgerMenu
}) => {
  const [buttonHover, setButtonHover] = React.useState();
  const [buttonActive, setButtonActive] = React.useState();

  const location = useLocation();

  const history = useHistory();

  const dispatch = useDispatch();

  const handleButtonHover = () => {
    setButtonHover(true);
  };

  const handleButtonUnHover = () => {
    setButtonHover(false);
  };

  const handleClickButton = () => {
    if (categories) {
      dispatch({ type: GET_CATEGORY_FROM_BUTTON, category: categories });
      return;
    }
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
};

export default FilterButton;
