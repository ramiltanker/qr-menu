import {
  GET_CATEGORY_FROM_BUTTON,
  DELETE_CATEGORY_FROM_BUTTON,
  GET_SUBCATEGORY_FROM_BUTTON,
  DELETE_SUBCATEGORY_FROM_BUTTON
} from '../actions/filter';

const initialState = {
  category: [],
  isCategoryShow: false,
  subCategory: [],
  isSubCategoryShow: false
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
