import { takeLatest } from "redux-saga/effects";
import { loginStart } from "../reducer/login";
import { postLoginSaga } from "../reducer/login/saga";
import { signupStart } from "../reducer/signup";
import { postSignupSaga } from "../reducer/signup/saga";

/* EXPORT YOUR SAGAS HERE */
export function* sagas(){
    yield takeLatest([loginStart.type], postLoginSaga)
    yield takeLatest([signupStart.type], postSignupSaga)
}