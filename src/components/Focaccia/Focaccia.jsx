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
import styles from './Focaccia.module.css';
// Styles

function Focaccia(props) {
  const [renderCards, setRenderCards] = React.useState([]);
  const [isShowMoreButton, setShowMoreButton] = React.useState(true);

  const focaccia = menu.focaccia;

  React.useEffect(() => {
    if (props.screenWidth >= 1280) {
      setRenderCards(focaccia.slice(0, 12));
    }
    if (props.screenWidth <= 1090) {
      setRenderCards(focaccia.slice(0, 6));
    }
    if (props.screenWidth <= 425) {
      setRenderCards(focaccia.slice(0, 4));
    }
    if (renderCards.length === focaccia.length) {
      setShowMoreButton(false);
    } else {
      setShowMoreButton(true);
    }
  }, [focaccia, props.screenWidth]);

  React.useEffect(() => {
    if (focaccia.length === 0) {
      setShowMoreButton(false);
    }
    if (props.screenWidth >= 1280) {
      focaccia.length > 12 ? setShowMoreButton(true) : setShowMoreButton(false);
    }
    if (props.screenWidth <= 1090) {
      focaccia.length > 6 ? setShowMoreButton(true) : setShowMoreButton(false);
    }
    if (props.screenWidth <= 425) {
      focaccia.length > 5 ? setShowMoreButton(true) : setShowMoreButton(false);
    }
  }, [props.screenWidth, focaccia.length]);

  function handleShowFilms() {
    if (props.screenWidth >= 1280) {
      setRenderCards(focaccia.slice(0, renderCards.length + 3));
      if (renderCards.length >= focaccia.length - 3) {
        setShowMoreButton(false);
      }
    }
    if (props.screenWidth <= 1090) {
      setRenderCards(focaccia.slice(0, renderCards.length + 2));
      if (renderCards.length >= focaccia.length - 2) {
        setShowMoreButton(false);
      }
    }
    if (props.screenWidth <= 425) {
      setRenderCards(focaccia.slice(0, renderCards.length + 2));
      if (renderCards.length >= focaccia.length - 2) {
        setShowMoreButton(false);
      }
    }
  }

  return (
    <section className={styles.menu}>
      <TransitionGroup className={styles.box} component="div">
        {renderCards.map(({ name, description, price, image }, index) => {
          return (
            <CSSTransition timeout={300} classNames="card" key={index}>
              <Card name={name} text={description} price={price} key={index} image={image} />
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

export default Focaccia;
