import { call, put, select } from "redux-saga/effects";
import { loadError, loadSuccess } from ".";
import * as api from "../../../services/api";
import { signupData } from "./selectors";

const getResponseError = (e) => {

    if (e) {
        if(e.error_message){
            return e.error_message
        }
        return "Something went wrong, contact us for further informations.";
    }
    return "Something went wrong, contact us for further informations.";
}

export function* postSignupSaga() {
    try {
        const data = yield select(signupData);
        const response = yield call([api, api.postSignup], data);
        console.log("RESPONSE IN SAGA", response)
        yield put(loadSuccess(response));
    }
    catch (e) {
        console.log("ERROR IN SAGA", e)
        yield put(loadError(getResponseError(e)));
    }
}
