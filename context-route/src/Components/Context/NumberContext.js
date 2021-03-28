import { createContext, useReducer, useContext } from "react";

const NumberContext = createContext();

const INCREASE = "increase";
const DECREASE = "decrease";
const initialNum = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};

export const action = (type) => {
  return {
    type,
  };
};

export const NumberContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialNum);

  return <NumberContext.Provider value={{ state, dispatch }} {...props} />;
};

export const useNumberContext = () => useContext(NumberContext);
