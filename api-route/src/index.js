import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App/App";
import Nav from "./component/Nav/Nav";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
