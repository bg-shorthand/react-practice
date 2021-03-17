import { useReducer } from "react";

import Header from "../components/Header/Header";
import CompletedAll from "../components/Main/CompletedAll/CompletedAll";
import Input from "../components/Main/Input/Input";
import RemoveCompleted from "../components/Main/RemoveCompleted/RemoveCompleted";
import Todos from "../components/Main/Todos/Todos";

import { todos } from "../state/state.json";

import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "addTodos": {
      return [...state, action.newTodo];
    }
    case "completedTodo": {
      return state.map((todo) =>
        todo.id === +action.id ? { ...todo, completed: !todo.completed } : todo
      );
    }
    case "removeTodo": {
      return state.filter((todo) => todo.id !== +action.id);
    }
    case "completedAll": {
      return state.map((todo) => ({ ...todo, completed: action.checked }));
    }
    case "removeCompleted": {
      return state.filter((todo) => !todo.completed);
    }
    default:
      console.error("error");
  }
};

function App() {
  const [_todos, disfatch] = useReducer(reducer, todos);

  return (
    <>
      <header>
        <Header title="TODOS" ver="1.0" />
      </header>
      <main>
        <Input disfatch={disfatch} todos={_todos} />
        <Todos disfatch={disfatch} todos={_todos} />
        <CompletedAll disfatch={disfatch} todos={_todos} />
        <RemoveCompleted
          completed={_todos.filter((todo) => todo.completed).length}
          all={_todos.length}
          disfatch={disfatch}
        />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
