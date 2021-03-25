import { createStore } from "redux";

const state = {
  favoriteList: [],
};

const favoriteListReducer = (prevState = state, action) => {
  switch (action.type) {
    case "favoriteListCreate":
      return {
        ...prevState,
        ...action.payload,
      };
    default:
      return state;
  }
};

const favoriteListStore = createStore(favoriteListReducer);

export default favoriteListStore;
