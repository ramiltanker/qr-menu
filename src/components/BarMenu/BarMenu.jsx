import React from 'react';
import { useParams } from 'react-router';

// Redux
import { SHOW_CATEGORY_CARDS } from '../../redux/actions/filter';

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
import styles from './BarMenu.module.css';
// Styles

function BarMenu(props) {
  const [renderCards, setRenderCards] = React.useState([]);
  const [barMenu, setBarMenu] = React.useState([]);
  const [isShowMoreButton, setShowMoreButton] = React.useState(true);

  const coctails = menu.coctails;
  const mulledWine = menu.mulledWine;
  const vodka = menu.vodka;
  const whiskey = menu.whiskey;
  const rum = menu.rum;
  const martini = menu.martini;
  const tequilla = menu.tequilla;
  const draftBeer = menu.draftBeer;
  const bottledBeer = menu.bottledBeer;
  const other = menu.other;

  const {
    isCoctailsShow,
    isMulledWinesShow,
    isVodkaShow,
    isWhiskeyShow,
    isRumShow,
    isMartiniShow,
    isTequilaShow,
    isDraftBeerShow,
    isBottledBeerShow,
    isOthersShow
  } = useSelector((store) => store.filter);

  React.useEffect(() => {
    if (isCoctailsShow) setBarMenu(coctails);
    if (isMulledWinesShow) setBarMenu(mulledWine);
    if (isVodkaShow) setBarMenu(vodka);
    if (isWhiskeyShow) setBarMenu(whiskey);
    if (isRumShow) setBarMenu(rum);
    if (isMartiniShow) setBarMenu(martini);
    if (isTequilaShow) setBarMenu(tequilla);
    if (isDraftBeerShow) setBarMenu(draftBeer);
    if (isBottledBeerShow) setBarMenu(bottledBeer);
    if (isOthersShow) setBarMenu(other);
  }, [
    isCoctailsShow,
    isMulledWinesShow,
    isVodkaShow,
    isWhiskeyShow,
    isRumShow,
    isMartiniShow,
    isTequilaShow,
    isOthersShow,
    coctails,
    mulledWine,
    vodka,
    whiskey,
    rum,
    martini,
    tequilla,
    other,
    isDraftBeerShow,
    draftBeer,
    isBottledBeerShow,
    bottledBeer
  ]);

  React.useEffect(() => {
    if (props.screenWidth >= 1280) {
      setRenderCards(barMenu.slice(0, 12));
    }
    if (props.screenWidth <= 1090) {
      setRenderCards(barMenu.slice(0, 6));
    }
    if (props.screenWidth <= 425) {
      setRenderCards(barMenu.slice(0, 4));
    }
    if (renderCards.length === barMenu.length) {
      setShowMoreButton(false);
    } else {
      setShowMoreButton(true);
    }
  }, [barMenu, props.screenWidth]);

  React.useEffect(() => {
    if (barMenu.length === 0) {
      setShowMoreButton(false);
    }
    if (props.screenWidth >= 1280) {
      barMenu.length > 12 ? setShowMoreButton(true) : setShowMoreButton(false);
    }
    if (props.screenWidth <= 1090) {
      barMenu.length > 6 ? setShowMoreButton(true) : setShowMoreButton(false);
    }
    if (props.screenWidth <= 425) {
      barMenu.length > 5 ? setShowMoreButton(true) : setShowMoreButton(false);
    }
  }, [props.screenWidth, barMenu.length]);

  function handleShowFilms() {
    if (props.screenWidth >= 1280) {
      setRenderCards(barMenu.slice(0, renderCards.length + 3));
      if (renderCards.length >= barMenu.length - 3) {
        setShowMoreButton(false);
      }
    }
    if (props.screenWidth <= 1090) {
      setRenderCards(barMenu.slice(0, renderCards.length + 2));
      if (renderCards.length >= barMenu.length - 2) {
        setShowMoreButton(false);
      }
    }
    if (props.screenWidth <= 425) {
      setRenderCards(barMenu.slice(0, renderCards.length + 2));
      if (renderCards.length >= barMenu.length - 2) {
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

export default BarMenu;
