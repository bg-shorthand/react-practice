import { Component } from "react";
import { header, footer } from "./App.module.scss";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Input from "./components/Main/Input/Input";
import Nav from "./components/Main/Nav/Nav";
import Todos from "./components/Main/Todos/Todos";

import { todos } from "./assets/data.json";

class App extends Component {
  state = { todos: todos };

  generateId = () => {
    return this.state.todos.length === 0
      ? 1
      : Math.max(...this.state.todos.map((todo) => todo.id)) + 1;
  };

  addTodo = (e) => {
    e.preventDefault();

    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.generateId(),
          content: e.target.firstElementChild.value,
          completed: false,
        },
      ],
    });

    e.target.firstElementChild.value = "";
  };

  changeCompleted = (e) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === +e.target.parentNode.id
          ? { ...todo, completed: !todo.completed }
          : todo
      ),
    });
  };

  removeTodo = (e) => {
    if (!e.target.matches("svg > *")) return;
    this.setState({
      todos: this.state.todos.filter(
        (todo) => todo.id !== +e.target.closest("li").id
      ),
    });
  };

  render() {
    return (
      <>
        <header className={header}>
          <Header />
        </header>
        <main>
          <Input addTodo={this.addTodo} />
          <Nav menus={["all", "active", "completed"]} />
          <Todos
            todos={this.state.todos}
            changeCompleted={this.changeCompleted}
            removeTodo={this.removeTodo}
          />
        </main>
        <footer className={footer}>
          <Footer />
        </footer>
      </>
    );
  }
}

export default App;
