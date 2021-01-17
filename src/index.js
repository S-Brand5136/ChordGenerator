import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App className="App" />
  </Provider>,
  document.getElementById("root")
);
