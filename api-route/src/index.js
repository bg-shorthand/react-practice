import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { App } from "./App/App";
import Counter from "./Counter/Counter";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Counter />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
