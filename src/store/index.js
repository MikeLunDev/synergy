import { configureStore } from "@reduxjs/toolkit";
import reducer from "../store/reducer"
import createSagaMiddleware from "redux-saga";
import { sagas } from "./saga";
/* istanbul ignore file */
const sagaMiddleware = createSagaMiddleware();

const devMode = process.env.DEBUG === "true" || process.env.NODE_ENV === "development";
export const createStore = () => {
    let store = configureStore({
        reducer: reducer,
        devTools: devMode,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
    })
    sagaMiddleware["run"](sagas);
    if (devMode && module["hot"]) {
        module["hot"].accept("./reducer", () => store.replaceReducer(reducer));
      }
    return store
};