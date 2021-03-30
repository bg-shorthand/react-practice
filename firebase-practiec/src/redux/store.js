import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const ADD = "add";

const initialBookmark = {
  list: [],
};

const bookmarkReducer = (state = initialBookmark, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        list: [...state.list, action.newBookmark],
      };
    default:
      return state;
  }
};

const combineReducer = combineReducers({
  bookmark: bookmarkReducer,
});

const store = createStore(combineReducer);

const StoreProvider = (props) => {
  return <Provider store={store} {...props} />;
};

export default StoreProvider;
