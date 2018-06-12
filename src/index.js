import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { history } from "./history";
import { ConnectedRouter } from "react-router-redux";
import store from "./store";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const ROOT = document.querySelector("#root");

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  ROOT
);
registerServiceWorker();
