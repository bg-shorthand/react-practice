import { ReactComponent as Icon } from "../../../assets/shape.svg";

import style from "./Todos.module.scss";

const Todos = ({ todos, changeCompleted, removeTodo }) => {
  return (
    <ul className={`todos ${style.todos}`}>
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
