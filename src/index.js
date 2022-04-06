/*istanbul ignore file*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Router from "../src/features/router";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { historyObject } from "./historyObject";
import { createStore } from "./store";

if (process.env.NODE_ENV === "development") {
  const { worker } = require('./mocks/browser')
  worker.start({ onUnhandledRequest: "bypass" })
}

const store = createStore();



/*instanbul ignore next */
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={historyObject}>
      <Router />
    </ConnectedRouter>
  </Provider>, document.getElementById('root'));
