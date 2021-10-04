import React from 'react';

// Стили
import styles from './FilterMobile.module.css';
// Стили

// Components
import Overlay from '../Overlay/Overlay';
import FilterButton from '../FilterButton/FilterButton';
// Components

// Images
import closeIcon from '../../assets/images/icons/close.svg';
// Images

// Constants
import filterCards from '../../utils/constants/filterCards';
// Constants

function FilterMobile({ handleSwitchBurgerMenu, screenWidth, isBurgerMenuActive, setIsBurgerMenuActive, filterRef }) {
  return (
    <>
      <Overlay />
      <div className={styles.container} key={'filter'} ref={filterRef}>
        <img src={closeIcon} alt="close" className={styles.close_icon} onClick={handleSwitchBurgerMenu} />
        <div className={styles.filter_mobile}>
          {filterCards.map(({ enName, ruName, path }, index) => {
            return (
              <FilterButton
                enName={enName}
                ruName={ruName}
                key={index}
                path={path}
                screenWidth={screenWidth}
                isBurgerMenuActive={isBurgerMenuActive}
                setIsBurgerMenuActive={setIsBurgerMenuActive}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FilterMobile;
