import { createStore } from "redux";

const state = {
  moviesList: [],
};

const moviesListReducer = (prevState = state, action) => {
  switch (action.type) {
    case "moviesListCreate":
      return {
        ...prevState,
        moviesList: [...prevState.moviesList, ...action.payload],
      };
    default:
      return state;
  }
};

const moviesListStore = createStore(moviesListReducer);

export default moviesListStore;
