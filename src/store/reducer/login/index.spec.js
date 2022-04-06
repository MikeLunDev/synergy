import produce from "immer";
import reducer, {
    initialState,
    loadError, loadReset, loadSuccess, loginStart
} from "./index";

describe("loginReducer test", () => {

    const loginStartState = produce(initialState, draftState => {
        draftState.status = "loading";
        draftState.email = "testemail";
        draftState.password = "testpassword";
        draftState.error = "";
    })
    const successState = produce(loginStartState, draftState => {
        draftState.status = "success";
        draftState.data = { id: 1, name: "testname", email: "testemail", password: "testpassword" }
    });


    const errorState = produce(loginStartState, draftState => {
        draftState.status = "error";
        draftState.error = "Error";
    });


    it("should loginStart correctly", () => {
        expect(reducer(initialState, {
            type: loginStart.type,
            payload: { email: "testemail", password: "testpassword" }
        })).toEqual(loginStartState);
    });

    it("should handle success", () => {
        expect(reducer(loginStartState, {
            type: loadSuccess.type,
            payload: { id: 1, name: "testname", email: "testemail", password: "testpassword" }
        })).toEqual(successState);
    });

    it("should handle error", () => {
        expect(reducer(loginStartState, {
            type: loadError.type,
            payload: "Error"
        })).toEqual(errorState);
    });

    it("should reset error", () => {
        expect(reducer(errorState, {
            type: loadReset.type
        })).toEqual(initialState);
    });

});