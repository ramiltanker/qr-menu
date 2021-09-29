import React from 'react';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Styles
import styles from './Menu.module.css';
// Styles

// Components
import Card from '../Card/Card';
// Components

// Constants
import menu from '../../utils/constants/menu';
import './transition.css';
// Constants

const Menu = () => {
  const pizzaz = menu.pizzaz;

  const [renderCards, setRenderCards] = React.useState([]);
  const [isShowMoreButton, setShowMoreButton] = React.useState(true);

  // Ширина экрана
  const [screenWidth, setScreenWidth] = React.useState(0);

  function updateScreenWidth() {
    setScreenWidth(window.innerWidth);
  }

  React.useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener('resize', updateScreenWidth);
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);
  // Ширина экрана

  React.useEffect(() => {
    if (screenWidth >= 1280) {
      setRenderCards(pizzaz.slice(0, 12));
    }
    if (screenWidth <= 1024) {
      setRenderCards(pizzaz.slice(0, 6));
    }
    if (screenWidth <= 425) {
      setRenderCards(pizzaz.slice(0, 4));
    }
    if (renderCards.length === pizzaz.length) {
      setShowMoreButton(false);
    } else {
      setShowMoreButton(true);
    }
  }, [pizzaz, screenWidth]);

  React.useEffect(() => {
    if (pizzaz.length === 0) {
      setShowMoreButton(false);
    }
    if (screenWidth >= 1280) {
      pizzaz.length > 12 ? setShowMoreButton(true) : setShowMoreButton(false);
    }
    if (screenWidth <= 1024) {
      pizzaz.length > 6 ? setShowMoreButton(true) : setShowMoreButton(false);
    }
    if (screenWidth <= 425) {
      pizzaz.length > 5 ? setShowMoreButton(true) : setShowMoreButton(false);
    }
  }, [screenWidth, pizzaz.length]);

  function handleShowFilms() {
    if (screenWidth >= 1280) {
      setRenderCards(pizzaz.slice(0, renderCards.length + 3));
      if (renderCards.length >= pizzaz.length - 3) {
        setShowMoreButton(false);
      }
    }
    if (screenWidth <= 1024) {
      setRenderCards(pizzaz.slice(0, renderCards.length + 2));
      if (renderCards.length >= pizzaz.length - 2) {
        setShowMoreButton(false);
      }
    }
    if (screenWidth <= 425) {
      setRenderCards(pizzaz.slice(0, renderCards.length + 2));
      if (renderCards.length >= pizzaz.length - 2) {
        setShowMoreButton(false);
      }
    }
  }

  return (
    <section className={styles.menu}>
      <TransitionGroup className={styles.box} component="div">
        {renderCards.map(({ name, description, price }, index) => {
          return (
            <CSSTransition timeout={300} classNames="card" key={index}>
              <Card name={name} text={description} price={price} key={index} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
      <button
        className={isShowMoreButton ? styles.button_more : styles.button_more_inactive}
        type="button"
        onClick={handleShowFilms}
      >
        Ещё
      </button>
    </section>
  );
};

export default Menu;
