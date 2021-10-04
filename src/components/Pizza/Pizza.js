import React from 'react';

// Анимация
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// Анимация

// Components
import Card from '../Card/Card';
// Components

// Constants
import menu from '../../utils/constants/menu';
// Constants

// Styles
import styles from './Pizza.module.css';
// Styles

function Pizza(props) {
  const [renderCards, setRenderCards] = React.useState([]);
  const [isShowMoreButton, setShowMoreButton] = React.useState(true);

  const pizza = menu.pizza;

  React.useEffect(() => {
    if (props.screenWidth >= 1280) {
      setRenderCards(pizza.slice(0, 12));
    }
    if (props.screenWidth <= 1024) {
      setRenderCards(pizza.slice(0, 6));
    }
    if (props.screenWidth <= 425) {
      setRenderCards(pizza.slice(0, 4));
    }
    if (renderCards.length === pizza.length) {
      setShowMoreButton(false);
    } else {
      setShowMoreButton(true);
    }
  }, [pizza, props.screenWidth]);

  React.useEffect(() => {
    if (pizza.length === 0) {
      setShowMoreButton(false);
    }
    if (props.screenWidth >= 1280) {
      pizza.length > 12 ? setShowMoreButton(true) : setShowMoreButton(false);
    }
    if (props.screenWidth <= 1024) {
      pizza.length > 6 ? setShowMoreButton(true) : setShowMoreButton(false);
    }
    if (props.screenWidth <= 425) {
      pizza.length > 5 ? setShowMoreButton(true) : setShowMoreButton(false);
    }
  }, [props.screenWidth, pizza.length]);

  function handleShowFilms() {
    if (props.screenWidth >= 1280) {
      setRenderCards(pizza.slice(0, renderCards.length + 3));
      if (renderCards.length >= pizza.length - 3) {
        setShowMoreButton(false);
      }
    }
    if (props.screenWidth <= 1024) {
      setRenderCards(pizza.slice(0, renderCards.length + 2));
      if (renderCards.length >= pizza.length - 2) {
        setShowMoreButton(false);
      }
    }
    if (props.screenWidth <= 425) {
      setRenderCards(pizza.slice(0, renderCards.length + 2));
      if (renderCards.length >= pizza.length - 2) {
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
}

export default Pizza;
