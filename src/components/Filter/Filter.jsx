import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Styles
import styles from './Filter.module.css';
import './filter-transition.css';
// Styles

// Components
import FilterButton from '../FilterButton/FilterButton';
import FilterMobile from '../FilterMobile/FilterMobile';
// Components

// Images
import burgerIcon from '../../assets/images/icons/burger.svg';
// Images

// Constants
import filterCards from '../../utils/constants/filterCards';
// Constants

const Filter = (props) => {
  const [isBurgerMenuActive, setIsBurgerMenuActive] = React.useState(false);

  const filterRef = React.useRef();

  const handleSwitchBurgerMenu = () => {
    setIsBurgerMenuActive(!isBurgerMenuActive);
  };

  React.useEffect(() => {
    if (isBurgerMenuActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  });
  return (
    <div className={styles.filter_container}>
      {props.screenWidth < 635 && !isBurgerMenuActive && (
        <CSSTransition
          in={!isBurgerMenuActive}
          timeout={800}
          mountOnEnter
          unmountOnExit
          classNames="burger-icon"
          appear={true}
        >
          <img src={burgerIcon} alt="burger" className={styles.burger_icon} onClick={handleSwitchBurgerMenu} />
        </CSSTransition>
      )}
      {props.screenWidth < 635 ? (
        <CSSTransition
          in={isBurgerMenuActive}
          timeout={300}
          mountOnEnter
          unmountOnExit
          classNames="filter"
          appear={true}
          nodeRef={filterRef}
        >
          <FilterMobile
            key={'filter'}
            filterRef={filterRef}
            handleSwitchBurgerMenu={handleSwitchBurgerMenu}
            screenWidth={props.screenWidth}
            isBurgerMenuActive={isBurgerMenuActive}
            setIsBurgerMenuActive={setIsBurgerMenuActive}
          />
        </CSSTransition>
      ) : (
        <div className={styles.filter}>
          {filterCards.map(({ enName, ruName, path }, index) => {
            return (
              <FilterButton enName={enName} ruName={ruName} key={index} path={path} screenWidth={props.screenWidth} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Filter;
