import 'src/publicPath';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {App} from 'src/App';
import { Provider } from "react-redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { sagas } from "src/store/saga";
import reducer from "src/store/reducer";
/* istanbul ignore file */
const devMode = process.env.DEBUG === "true" || process.env.NODE_ENV === "development";
const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: reducer,
  devTools: devMode,
  middleware
});

sagaMiddleware["run"](sagas);

if (devMode && module["hot"]) {
  module["hot"].accept("./store/reducer/index.js", () => store.replaceReducer(reducer));
}

/*instanbul ignore next */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
