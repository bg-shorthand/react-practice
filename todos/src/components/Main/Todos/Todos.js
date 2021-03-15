import { useState } from "react";

import { ReactComponent as Icon } from "../../../assets/shape.svg";

const Todos = ({ todos, changeCompleted, removeTodo }) => {
  return (
    <ul className="todos">
      {todos.map(({ id, content, completed }) => {
        return (
          <li key={id} id={id} onChange={changeCompleted} onClick={removeTodo}>
            <input id={`ck-${id}`} type="checkbox" defaultChecked={completed} />
            <label htmlFor={`ck-${id}`}>{content}</label>
            <Icon />
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
