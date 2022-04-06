import { connectRouter } from "connected-react-router";
import {combineReducers} from "redux";
import { historyObject } from "../../historyObject";
import login from "../reducer/login";
import signup from "../reducer/signup";
/* EXPORT YOUR REDUCERS HERE */

export default combineReducers({
    router: connectRouter(historyObject),
    login,
    signup
})