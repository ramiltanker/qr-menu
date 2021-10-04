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
import styles from './Deserts.module.css';
// Styles

function Deserts(props) {
  const [renderCards, setRenderCards] = React.useState([]);
  const [isShowMoreButton, setShowMoreButton] = React.useState(true);

  const deserts = menu.deserts;

  React.useEffect(() => {
    if (props.screenWidth >= 1280) {
      setRenderCards(deserts.slice(0, 12));
    }
    if (props.screenWidth <= 1024) {
      setRenderCards(deserts.slice(0, 6));
    }
    if (props.screenWidth <= 425) {
      setRenderCards(deserts.slice(0, 4));
    }
    if (renderCards.length === deserts.length) {
      setShowMoreButton(false);
    } else {
      setShowMoreButton(true);
    }
  }, [deserts, props.screenWidth]);

  React.useEffect(() => {
    if (deserts.length === 0) {
      setShowMoreButton(false);
    }
    if (props.screenWidth >= 1280) {
      deserts.length > 12 ? setShowMoreButton(true) : setShowMoreButton(false);
    }
    if (props.screenWidth <= 1024) {
      deserts.length > 6 ? setShowMoreButton(true) : setShowMoreButton(false);
    }
    if (props.screenWidth <= 425) {
      deserts.length > 5 ? setShowMoreButton(true) : setShowMoreButton(false);
    }
  }, [props.screenWidth, deserts.length]);

  function handleShowFilms() {
    if (props.screenWidth >= 1280) {
      setRenderCards(deserts.slice(0, renderCards.length + 3));
      if (renderCards.length >= deserts.length - 3) {
        setShowMoreButton(false);
      }
    }
    if (props.screenWidth <= 1024) {
      setRenderCards(deserts.slice(0, renderCards.length + 2));
      if (renderCards.length >= deserts.length - 2) {
        setShowMoreButton(false);
      }
    }
    if (props.screenWidth <= 425) {
      setRenderCards(deserts.slice(0, renderCards.length + 2));
      if (renderCards.length >= deserts.length - 2) {
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

export default Deserts;
