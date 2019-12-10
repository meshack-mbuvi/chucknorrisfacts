import {State} from "../action/state"
import {SET_CATEGORIES, SET_JOKES, SELECT_CATEGORY, SEARCH_RESULTS} from '../action/types'

export const jokeCategories = (state = State, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      const categories = action.payload;
      return {
        ...state,
        categories,
      };

    default:
      return state;
  }
};

export const randomJoke = (state = State, action) => {
  switch (action.type) {
    case SET_JOKES:
      return {
        ...state,
        joke: action.payload,
      };

    default:
      return state;
  }
};

export const selectCategory = (state = State, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return {
        ...state,
        selected_category: action.payload,
        
      };

    default:
      return state;
  }
};

export const searchResults = (state = State, action) => {
  switch (action.type) {
    case SEARCH_RESULTS:
      return {
        ...state,
        results: action.payload,
      };

    default:
      return state;
  }
};