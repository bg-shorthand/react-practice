import { useContext } from "react";

import { TodosContext } from "../../Context/Context";

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
            id:
              todos.length !== 0
                ? Math.max(...todos.map((todo) => todo.id)) + 1
                : 1,
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
