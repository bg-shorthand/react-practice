import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import StoreProvider from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
