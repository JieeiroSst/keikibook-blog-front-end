import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import appReducers from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

const store = createStore(appReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);


reportWebVitals();
