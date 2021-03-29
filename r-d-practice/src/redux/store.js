import { Provider } from "react-redux";
import { createStore } from "redux";
import indexReducer from "./reducer";

const store = createStore(indexReducer);

const StoreProvider = (props) => {
  return <Provider store={store} {...props} />;
};

export default StoreProvider;
