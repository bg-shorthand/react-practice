import { useContext } from "react";

import { TodosContext } from "../../Context/Context";

const generateId = (todos) => {
  return todos.length !== 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
};

const Input = () => {
  const { todos, dispatch } = useContext(TodosContext);

  return (
    <input
      type="text"
      onKeyUp={(e) => {
        if (e.key !== "Enter") return;
        dispatch({
          type: "addTodos",
          newTodo: {
            id: generateId(todos),
            content: e.target.value,
            completed: false,
          },
        });
        e.target.value = "";
      }}
      autoFocus
    />
  );
};

export default Input;
