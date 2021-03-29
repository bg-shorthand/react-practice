import { combineReducers } from "redux";
import numberReducer from "./number";

const indexReducer = combineReducers({
  number: numberReducer,
});

export default indexReducer;
