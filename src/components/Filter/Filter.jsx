import React from 'react';

// Styles
import styles from './Filter.module.css';
// Styles

// Images
import closeIcon from '../../assets/images/icons/close.svg';
import burgerIcon from '../../assets/images/icons/burger.svg';
// Images

// Components
import FilterButton from '../FilterButton/FilterButton';
// Components

// Constants
import filterCards from '../../utils/constants/filterCards';
// Constants

const Filter = (props) => {
  const [isBurgerMenuActive, setIsBurgerMenuActive] = React.useState(false);

  const handleSwitchBurgerMenu = () => {
    setIsBurgerMenuActive(!isBurgerMenuActive);
  };

  return (
    <>
      {props.screenWidth < 635 && !isBurgerMenuActive && (
        <img src={burgerIcon} alt="burger" className={styles.burger_icon} onClick={handleSwitchBurgerMenu} />
      )}
      {props.screenWidth < 635 && isBurgerMenuActive && (
        <div className={props.screenWidth < 635 && styles.container}>
          {props.screenWidth < 635 && (
            <img src={closeIcon} alt="close" className={styles.close_icon} onClick={handleSwitchBurgerMenu} />
          )}
          <div className={props.screenWidth < 635 ? styles.filter_mobile : styles.filter}>
            {filterCards.map(({ enName, ruName, path }, index) => {
              return (
                <FilterButton enName={enName} ruName={ruName} key={index} path={path} screenWidth={props.screenWidth} />
              );
            })}
          </div>
        </div>
      )}
      {props.screenWidth > 635 && (
        <div className={styles.filter}>
          {filterCards.map(({ enName, ruName, path }, index) => {
            return (
              <FilterButton enName={enName} ruName={ruName} key={index} path={path} screenWidth={props.screenWidth} />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Filter;
