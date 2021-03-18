import { useContext } from "react";

import { TodosContext } from "../../Context/Context";

const RemoveCompleted = () => {
  const { todos, dispatch } = useContext(TodosContext);
  const completed = todos.filter((todo) => todo.completed).length;
  const all = todos.length;

  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: "removeCompleted",
          });
        }}
      >
        REMOVECOMPLETED
      </button>
      <span>
        {completed} / {all}
      </span>
    </div>
  );
};

export default RemoveCompleted;
