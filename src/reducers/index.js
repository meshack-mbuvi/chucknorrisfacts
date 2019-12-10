import { combineReducers } from "redux";
import {
  jokeCategories,
  randomJoke,
  selectCategory,
  searchResults,
} from "./jokes";

export const rootReducer = combineReducers({
  jokeCategories,
  randomJoke,
  selectCategory,
  searchResults,
});
