/*istanbul ignore file*/
import {runSaga} from "redux-saga";

export async function recordSaga(saga, initialAction, initialState) {
    const dispatched = [];

    await runSaga(
        {
            dispatch: action => dispatched.push(action),
            getState: 
            /*istanbul ignore next*/
            () => initialState
        },
        saga,
        initialAction
    ).done;

    return dispatched;
}