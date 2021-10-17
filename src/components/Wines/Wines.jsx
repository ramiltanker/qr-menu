import React, { Children } from 'react';
import { Route, useLocation, useParams } from 'react-router';

// Redux
import { SHOW_SUBCATEGORY_CARDS } from '../../redux/actions/filter';

import { useSelector, useDispatch } from 'react-redux';
// Redux

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
import styles from './Wines.module.css';
// Styles

function Wines(props) {
  const [renderCards, setRenderCards] = React.useState([]);
  const [wines, setWines] = React.useState([]);
  const [isShowMoreButton, setShowMoreButton] = React.useState(true);

  const homemadeWine = menu.homemadeWine;
  const sparklingWines = menu.sparklingWines;
  const georgiaKartuliMarani = menu.georgiaKartuliMarani;
  const fruitWines = menu.fruitWines;

  const dispatch = useDispatch();

  const { isHomemadeWinesShow, isSparklingWinesShow, isGeorgiaKartuliMarani, isFruitWines } = useSelector(
    (store) => store.filter
  );

  React.useEffect(() => {
    if (isHomemadeWinesShow) setWines(homemadeWine);
    if (isSparklingWinesShow) setWines(sparklingWines);
    if (isGeorgiaKartuliMarani) setWines(georgiaKartuliMarani);
    if (isFruitWines) setWines(fruitWines);
  }, [
    isHomemadeWinesShow,
    homemadeWine,
    isSparklingWinesShow,
    sparklingWines,
    isGeorgiaKartuliMarani,
    georgiaKartuliMarani,
    isFruitWines,
    fruitWines
  ]);

  const { wineType } = useParams();

  React.useEffect(() => {
    dispatch({ type: SHOW_SUBCATEGORY_CARDS, path: `/${wineType}` });
  }, [dispatch]);

  React.useEffect(() => {
    if (props.screenWidth >= 1280) {
      setRenderCards(wines.slice(0, 12));
    }
    if (props.screenWidth <= 1090) {
      setRenderCards(wines.slice(0, 6));
    }
    if (props.screenWidth <= 425) {
      setRenderCards(wines.slice(0, 4));
    }
    if (renderCards.length === wines.length) {
      setShowMoreButton(false);
    } else {
      setShowMoreButton(true);
    }
  }, [wines, props.screenWidth]);

  React.useEffect(() => {
    if (wines.length === 0) {
      setShowMoreButton(false);
    }
    if (props.screenWidth >= 1280) {
      wines.length > 12 ? setShowMoreButton(true) : setShowMoreButton(false);
    }
    if (props.screenWidth <= 1090) {
      wines.length > 6 ? setShowMoreButton(true) : setShowMoreButton(false);
    }
    if (props.screenWidth <= 425) {
      wines.length > 5 ? setShowMoreButton(true) : setShowMoreButton(false);
    }
  }, [props.screenWidth, wines.length]);

  function handleShowFilms() {
    if (props.screenWidth >= 1280) {
      setRenderCards(wines.slice(0, renderCards.length + 3));
      if (renderCards.length >= wines.length - 3) {
        setShowMoreButton(false);
      }
    }
    if (props.screenWidth <= 1090) {
      setRenderCards(wines.slice(0, renderCards.length + 2));
      if (renderCards.length >= wines.length - 2) {
        setShowMoreButton(false);
      }
    }
    if (props.screenWidth <= 425) {
      setRenderCards(wines.slice(0, renderCards.length + 2));
      if (renderCards.length >= wines.length - 2) {
        setShowMoreButton(false);
      }
    }
  }

  const location = useLocation();

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

export default Wines;
