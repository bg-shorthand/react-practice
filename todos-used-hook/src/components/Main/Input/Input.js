const Input = ({ disfatch, todos }) => {
  return (
    <input
      type="text"
      onKeyUp={(e) => {
        if (e.key !== "Enter") return;
        disfatch({
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
