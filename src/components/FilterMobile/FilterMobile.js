import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
  const closeIconRef = React.useRef();

  return (
    <>
      <Overlay />
      <div className={styles.container} key={'filter'} ref={filterRef}>
        <CSSTransition
          in={isBurgerMenuActive}
          timeout={10000}
          mountOnEnter
          key="close-icon"
          classNames="close-icon"
          appear={true}
          nodeRef={closeIconRef}
        >
          <img
            src={closeIcon}
            alt="close"
            className={styles.close_icon}
            onClick={handleSwitchBurgerMenu}
            ref={closeIconRef}
          />
        </CSSTransition>
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
