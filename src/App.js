import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return;
  <Provider store={store}>
    <Fragment>
      <div className="App">App</div>
    </Fragment>
  </Provider>;
};

export default App;
