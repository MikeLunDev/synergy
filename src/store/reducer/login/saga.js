import { call, put, select } from "redux-saga/effects";
import { loadError, loadSuccess } from ".";
import * as api from "../../../services/api";
import { loginData } from "./selectors";

const getResponseError = (e) => {

    if (e) {
        if(e.error_message){
            return e.error_message
        }
        return "Something went wrong, contact us for further informations.";
    }
    return "Something went wrong, contact us for further informations.";
}

export function* postLoginSaga() {
    try {
        const { email, password } = yield select(loginData);
        const response = yield call([api, api.postLogin], { email, password });
        yield put(loadSuccess(response));
    }
    catch (e) {
        yield put(loadError(getResponseError(e)));
    }
}
