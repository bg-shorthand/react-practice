import { useContext } from "react";

import { TodosContext } from "../../Context/Context";

const Todos = () => {
  const { todos, dispatch } = useContext(TodosContext);

  return (
    <ul>
      {todos.map(({ id, content, completed }) => {
        return (
          <li key={id}>
            <input
              id={id}
              type="checkbox"
              checked={completed}
              onChange={() => {
                dispatch({
                  type: "completedTodo",
                  id: id,
                });
              }}
            />
            <label htmlFor={id}>{content}</label>
            <button
              onClick={() => {
                dispatch({
                  type: "removeTodo",
                  id: id,
                });
              }}
            >
              REMOVE
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
