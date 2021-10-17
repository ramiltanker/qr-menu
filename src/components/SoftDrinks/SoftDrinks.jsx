import React from 'react';
import { useLocation, useParams } from 'react-router';

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
import styles from './SoftDrinks.module.css';
// Styles

function SoftDrinks(props) {
  const [renderCards, setRenderCards] = React.useState([]);
  const [softDrinks, setSoftDrinks] = React.useState([]);
  const [isShowMoreButton, setShowMoreButton] = React.useState(true);

  const nonAlcoholicCoctails = menu.nonAlcoholicCoctails;
  const smoothie = menu.smoothie;
  const homemadeDrinks = menu.homemadeDrinks;
  const milkshakes = menu.milkshakes;
  const freshlySqueezedJuices = menu.freshlySqueezedJuices;
  const brandedLemonades = menu.brandedLemonades;
  const alcoholDreeDrinks = menu.alcoholDreeDrinks;

  const { softDrink } = useParams();
  const dispatch = useDispatch();

  const {
    isNonAlcoholicCoctailsShow,
    isSmoothieShow,
    isHomemadeDrinksShow,
    isMilkshakesShow,
    isFreshlySqueezedJuicesShow,
    isBrandedLemonadesShow,
    isAlcoholFreeDrinksShow
  } = useSelector((store) => store.filter);

  React.useEffect(() => {
    dispatch({ type: SHOW_CATEGORY_CARDS, path: `/${softDrink}` });
  }, [softDrink, dispatch]);

  React.useEffect(() => {
    if (isNonAlcoholicCoctailsShow) setSoftDrinks(nonAlcoholicCoctails);
    if (isSmoothieShow) setSoftDrinks(smoothie);
    if (isHomemadeDrinksShow) setSoftDrinks(homemadeDrinks);
    if (isMilkshakesShow) setSoftDrinks(milkshakes);
    if (isFreshlySqueezedJuicesShow) setSoftDrinks(freshlySqueezedJuices);
    if (isBrandedLemonadesShow) setSoftDrinks(brandedLemonades);
    if (isAlcoholFreeDrinksShow) setSoftDrinks(alcoholDreeDrinks);
  }, [
    alcoholDreeDrinks,
    brandedLemonades,
    freshlySqueezedJuices,
    homemadeDrinks,
    isAlcoholFreeDrinksShow,
    isBrandedLemonadesShow,
    isFreshlySqueezedJuicesShow,
    isHomemadeDrinksShow,
    isMilkshakesShow,
    isNonAlcoholicCoctailsShow,
    isSmoothieShow,
    milkshakes,
    nonAlcoholicCoctails,
    smoothie
  ]);

  React.useEffect(() => {
    if (props.screenWidth >= 1280) {
      setRenderCards(softDrinks.slice(0, 12));
    }
    if (props.screenWidth <= 1090) {
      setRenderCards(softDrinks.slice(0, 6));
    }
    if (props.screenWidth <= 425) {
      setRenderCards(softDrinks.slice(0, 4));
    }
    if (renderCards.length === softDrinks.length) {
      setShowMoreButton(false);
    } else {
      setShowMoreButton(true);
    }
  }, [softDrinks, props.screenWidth]);

  React.useEffect(() => {
    if (softDrinks.length === 0) {
      setShowMoreButton(false);
    }
    if (props.screenWidth >= 1280) {
      softDrinks.length > 12 ? setShowMoreButton(true) : setShowMoreButton(false);
    }
    if (props.screenWidth <= 1090) {
      softDrinks.length > 6 ? setShowMoreButton(true) : setShowMoreButton(false);
    }
    if (props.screenWidth <= 425) {
      softDrinks.length > 5 ? setShowMoreButton(true) : setShowMoreButton(false);
    }
  }, [props.screenWidth, softDrinks.length]);

  function handleShowFilms() {
    if (props.screenWidth >= 1280) {
      setRenderCards(softDrinks.slice(0, renderCards.length + 3));
      if (renderCards.length >= softDrinks.length - 3) {
        setShowMoreButton(false);
      }
    }
    if (props.screenWidth <= 1090) {
      setRenderCards(softDrinks.slice(0, renderCards.length + 2));
      if (renderCards.length >= softDrinks.length - 2) {
        setShowMoreButton(false);
      }
    }
    if (props.screenWidth <= 425) {
      setRenderCards(softDrinks.slice(0, renderCards.length + 2));
      if (renderCards.length >= softDrinks.length - 2) {
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

export default SoftDrinks;
