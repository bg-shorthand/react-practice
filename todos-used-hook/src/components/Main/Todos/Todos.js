const Todos = ({ todos, disfatch }) => {
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
                disfatch({
                  type: "completedTodo",
                  id: id,
                });
              }}
            />
            <label htmlFor={id}>{content}</label>
            <button
              onClick={() => {
                disfatch({
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
