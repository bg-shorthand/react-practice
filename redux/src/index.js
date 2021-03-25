import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App/App";
import movieListStore from "./Redux/movieListStore";

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

render();

movieListStore.subscribe(render);
