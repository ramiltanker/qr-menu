/* eslint-disable no-fallthrough */
import {
  GET_CATEGORY_FROM_BUTTON,
  DELETE_CATEGORY_FROM_BUTTON,
  GET_SUBCATEGORY_FROM_BUTTON,
  DELETE_SUBCATEGORY_FROM_BUTTON,
  SHOW_CATEGORY_CARDS
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
  isGrilledSausagesShow: false
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
