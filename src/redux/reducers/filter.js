/* eslint-disable no-fallthrough */
import {
  GET_CATEGORY_FROM_BUTTON,
  DELETE_CATEGORY_FROM_BUTTON,
  GET_SUBCATEGORY_FROM_BUTTON,
  DELETE_SUBCATEGORY_FROM_BUTTON,
  SHOW_CATEGORY_CARDS,
  SHOW_SUBCATEGORY_CARDS
} from '../actions/filter';

const initialState = {
  category: [],
  isCategoryShow: false,
  subCategory: [],
  isSubCategoryShow: false,

  isSecondCoursesShow: false,
  isSteaksShow: false,
  isFishDishesShow: false,
  isLambDishesShow: false,
  isBeefDishesShow: false,
  isChickenDishesShow: false,
  isGrilledSausagesShow: false,

  isCoctailsShow: false,
  isMulledWinesShow: false,
  isVodkaShow: false,
  isWhiskeyShow: false,
  isRumShow: false,
  isMartiniShow: false,
  isTequilaShow: false,
  isDraftBeerShow: false,
  isBottledBeerShow: false,
  isOthersShow: false,

  isHomemadeWinesShow: false,
  isSparklingWinesShow: false,
  isGeorgiaKartuliMarani: false,
  isFruitWines: false,

  isNonAlcoholicCoctailsShow: false,
  isSmoothieShow: false,
  isHomemadeDrinksShow: false,
  isMilkshakesShow: false,
  isFreshlySqueezedJuicesShow: false,
  isBrandedLemonadesShow: false,
  isAlcoholFreeDrinksShow: false
};

// Редьюсер
export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    // Добавление новой задачи в список дел
    case GET_CATEGORY_FROM_BUTTON: {
      return {
        ...state,
        category: action.category,
        isCategoryShow: true
      };
    }
    case DELETE_CATEGORY_FROM_BUTTON: {
      return {
        ...state,
        category: [],
        isCategoryShow: false
      };
    }
    case SHOW_CATEGORY_CARDS: {
      if (action.path === '/steaks') {
        return {
          ...state,
          isSecondCoursesShow: true,
          isSteaksShow: true,
          isFishDishesShow: false,
          isLambDishesShow: false,
          isBeefDishesShow: false,
          isChickenDishesShow: false,
          isGrilledSausagesShow: false
        };
      }
      if (action.path === '/fish') {
        return {
          ...state,
          isSecondCoursesShow: true,
          isSteaksShow: false,
          isFishDishesShow: true,
          isLambDishesShow: false,
          isBeefDishesShow: false,
          isChickenDishesShow: false,
          isGrilledSausagesShow: false
        };
      }
      if (action.path === '/lamb') {
        return {
          ...state,
          isSecondCoursesShow: true,
          isSteaksShow: false,
          isFishDishesShow: false,
          isLambDishesShow: true,
          isBeefDishesShow: false,
          isChickenDishesShow: false,
          isGrilledSausagesShow: false
        };
      }
      if (action.path === '/beef') {
        return {
          ...state,
          isSecondCoursesShow: true,
          isSteaksShow: false,
          isFishDishesShow: false,
          isLambDishesShow: false,
          isBeefDishesShow: true,
          isChickenDishesShow: false,
          isGrilledSausagesShow: false
        };
      }
      if (action.path === '/chicken') {
        return {
          ...state,
          isSecondCoursesShow: true,
          isSteaksShow: false,
          isFishDishesShow: false,
          isLambDishesShow: false,
          isBeefDishesShow: false,
          isChickenDishesShow: true,
          isGrilledSausagesShow: false
        };
      }
      if (action.path === '/grilled-sausages') {
        return {
          ...state,
          isSecondCoursesShow: true,
          isSteaksShow: false,
          isFishDishesShow: false,
          isLambDishesShow: false,
          isBeefDishesShow: false,
          isChickenDishesShow: false,
          isGrilledSausagesShow: true
        };
      }

      if (action.path === '/сocktails') {
        return {
          ...state,
          isCoctailsShow: true,
          isMulledWinesShow: false,
          isVodkaShow: false,
          isWhiskeyShow: false,
          isRumShow: false,
          isMartiniShow: false,
          isTequilaShow: false,
          isOthersShow: false
        };
      }

      if (action.path === '/mulled-wine') {
        return {
          ...state,
          isCoctailsShow: false,
          isMulledWinesShow: true,
          isVodkaShow: false,
          isWhiskeyShow: false,
          isRumShow: false,
          isMartiniShow: false,
          isTequilaShow: false,
          isOthersShow: false
        };
      }

      if (action.path === '/vodka') {
        return {
          ...state,
          isCoctailsShow: false,
          isMulledWinesShow: false,
          isVodkaShow: true,
          isWhiskeyShow: false,
          isRumShow: false,
          isMartiniShow: false,
          isTequilaShow: false,
          isOthersShow: false
        };
      }

      if (action.path === '/whiskey') {
        return {
          ...state,
          isCoctailsShow: false,
          isMulledWinesShow: false,
          isVodkaShow: false,
          isWhiskeyShow: true,
          isRumShow: false,
          isMartiniShow: false,
          isTequilaShow: false,
          isOthersShow: false
        };
      }

      if (action.path === '/rum') {
        return {
          ...state,
          isCoctailsShow: false,
          isMulledWinesShow: false,
          isVodkaShow: false,
          isWhiskeyShow: false,
          isRumShow: true,
          isMartiniShow: false,
          isTequilaShow: false,
          isOthersShow: false
        };
      }
      if (action.path === '/martini') {
        return {
          ...state,
          isCoctailsShow: false,
          isMulledWinesShow: false,
          isVodkaShow: false,
          isWhiskeyShow: false,
          isRumShow: false,
          isMartiniShow: true,
          isTequilaShow: false,
          isOthersShow: false
        };
      }
      if (action.path === '/tequila') {
        return {
          ...state,
          isCoctailsShow: false,
          isMulledWinesShow: false,
          isVodkaShow: false,
          isWhiskeyShow: false,
          isRumShow: false,
          isMartiniShow: false,
          isTequilaShow: true,
          isOthersShow: false
        };
      }
      if (action.path === '/other') {
        return {
          ...state,
          isCoctailsShow: false,
          isMulledWinesShow: false,
          isVodkaShow: false,
          isWhiskeyShow: false,
          isRumShow: false,
          isMartiniShow: false,
          isTequilaShow: false,
          isOthersShow: true
        };
      }

      if (action.path === '/draft-beer') {
        return {
          ...state,
          isCoctailsShow: false,
          isMulledWinesShow: false,
          isVodkaShow: false,
          isWhiskeyShow: false,
          isRumShow: false,
          isMartiniShow: false,
          isTequilaShow: false,
          isDraftBeerShow: true,
          isBottledBeerShow: false,
          isOthersShow: false
        };
      }
      if (action.path === '/bottled-beer') {
        return {
          ...state,
          isCoctailsShow: false,
          isMulledWinesShow: false,
          isVodkaShow: false,
          isWhiskeyShow: false,
          isRumShow: false,
          isMartiniShow: false,
          isTequilaShow: false,
          isDraftBeerShow: false,
          isBottledBeerShow: true,
          isOthersShow: false
        };
      }

      if (action.path === '/non-alcoholic-cocktails') {
        return {
          ...state,
          isNonAlcoholicCoctailsShow: true,
          isSmoothieShow: false,
          isHomemadeDrinksShow: false,
          isMilkshakesShow: false,
          isFreshlySqueezedJuicesShow: false,
          isBrandedLemonadesShow: false,
          isAlcoholFreeDrinksShow: false
        };
      }
      if (action.path === '/smoothie') {
        return {
          ...state,
          isNonAlcoholicCoctailsShow: false,
          isSmoothieShow: true,
          isHomemadeDrinksShow: false,
          isMilkshakesShow: false,
          isFreshlySqueezedJuicesShow: false,
          isBrandedLemonadesShow: false,
          isAlcoholFreeDrinksShow: false
        };
      }
      if (action.path === '/homemade-drinks') {
        return {
          ...state,
          isNonAlcoholicCoctailsShow: false,
          isSmoothieShow: false,
          isHomemadeDrinksShow: true,
          isMilkshakesShow: false,
          isFreshlySqueezedJuicesShow: false,
          isBrandedLemonadesShow: false,
          isAlcoholFreeDrinksShow: false
        };
      }
      if (action.path === '/milkshakes') {
        return {
          ...state,
          isNonAlcoholicCoctailsShow: false,
          isSmoothieShow: false,
          isHomemadeDrinksShow: false,
          isMilkshakesShow: true,
          isFreshlySqueezedJuicesShow: false,
          isBrandedLemonadesShow: false,
          isAlcoholFreeDrinksShow: false
        };
      }
      if (action.path === '/freshly-squeezed-juices') {
        return {
          ...state,
          isNonAlcoholicCoctailsShow: false,
          isSmoothieShow: false,
          isHomemadeDrinksShow: false,
          isMilkshakesShow: false,
          isFreshlySqueezedJuicesShow: true,
          isBrandedLemonadesShow: false,
          isAlcoholFreeDrinksShow: false
        };
      }
      if (action.path === '/branded-lemonades') {
        return {
          ...state,
          isNonAlcoholicCoctailsShow: false,
          isSmoothieShow: false,
          isHomemadeDrinksShow: false,
          isMilkshakesShow: false,
          isFreshlySqueezedJuicesShow: false,
          isBrandedLemonadesShow: true,
          isAlcoholFreeDrinksShow: false
        };
      }

      if (action.path === '/alcohol-free-drinks') {
        return {
          ...state,
          isNonAlcoholicCoctailsShow: false,
          isSmoothieShow: false,
          isHomemadeDrinksShow: false,
          isMilkshakesShow: false,
          isFreshlySqueezedJuicesShow: false,
          isBrandedLemonadesShow: false,
          isAlcoholFreeDrinksShow: true
        };
      }
    }
    case SHOW_SUBCATEGORY_CARDS: {
      if (action.path === '/homemade-wines') {
        return {
          isHomemadeWinesShow: true,
          isSparklingWinesShow: false,
          isGeorgiaKartuliMarani: false,
          isFruitWines: false
        };
      }
      if (action.path === '/sparkling-wines') {
        return {
          isHomemadeWinesShow: false,
          isSparklingWinesShow: true,
          isGeorgiaKartuliMarani: false,
          isFruitWines: false
        };
      }
      if (action.path === '/georgia-kartuli-marani') {
        return {
          isHomemadeWinesShow: false,
          isSparklingWinesShow: false,
          isGeorgiaKartuliMarani: true,
          isFruitWines: false
        };
      }
      if (action.path === '/fruit-wines') {
        return {
          isHomemadeWinesShow: false,
          isSparklingWinesShow: false,
          isGeorgiaKartuliMarani: false,
          isFruitWines: true
        };
      }
    }
    case GET_SUBCATEGORY_FROM_BUTTON: {
      return {
        ...state,
        subCategory: action.subCategory,
        isSubCategoryShow: true
      };
    }
    case DELETE_SUBCATEGORY_FROM_BUTTON: {
      return {
        ...state,
        subCategory: [],
        isSubCategoryShow: false
      };
    }
    // Изменение статуса задачи в списке дел
    default:
      return state;
  }
};
