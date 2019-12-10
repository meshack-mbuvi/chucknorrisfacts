import {
  SET_JOKES,
  SET_CATEGORIES,
  SELECT_CATEGORY,
  SEARCH_RESULTS,
} from "./types";
import client from "./client";

export const randomJokeByCategory = (category) => async dispatch => {
  const { data } = await client.get(`/random?category=${category}`);
  return dispatch(SetJoke(data));
};

export const randomJoke = () => async dispatch => {
  const {data} = await client.get("/random");
  return dispatch(SetJoke(data));
};

export const getJokeCategories = () => async dispatch => {
  const 
  {
      data
} = await client.get("/categories");

  return dispatch(SetJokeCategories(data));
};

export const searchJoke = (value) => async dispatch => {
  try {
    const { data: payload } = await client.get(
    `https://api.chucknorris.io/jokes/search?query=${value}`
  );
  
  // Save the text searched by user
  payload.search_text = value;
  return dispatch({
    payload,
    type: SEARCH_RESULTS,
  });
  } catch (error) {
    
  }
  
}

// Actions

const SetJoke = payload => {
  return {
    payload,
    type: SET_JOKES,
  };
};

const SetJokeCategories = payload => {
  return {
    payload,
    type: SET_CATEGORIES,
  };
};

export const selectCategory = (payload) => dispatch => {
  return dispatch({
    payload,
    type: SELECT_CATEGORY
  });
};
