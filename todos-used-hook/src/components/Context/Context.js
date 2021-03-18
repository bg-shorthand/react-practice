import { createContext } from "react";

export const TodosContext = createContext(null);

export const Context = ({ children, value }) => {
  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};
