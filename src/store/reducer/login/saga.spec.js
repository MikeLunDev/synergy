import { recordSaga } from "../../saga/recordSaga";
import * as api from "../../../services/api"
import { postLoginSaga } from "./saga";
import { loadError, loadSuccess } from "."

jest.mock("../../../services/api")

describe('Login saga test', () => {

    const state = {
       login: {
           email: "testemail",
           password: "testpassword"
       }
    }

    const response_ok = { id: 1 }

    beforeEach(() => {
        jest.resetAllMocks()
    })

    it("should call postLoginSaga with success", async () => {
        api.postLogin.mockResolvedValue(response_ok);
        const dispatched = await recordSaga(postLoginSaga, {}, state);
        expect(dispatched).toContainEqual(loadSuccess(response_ok));
        expect(api.postLogin).toBeCalledTimes(1);
        expect(api.postLogin).toHaveBeenCalledWith({"email": "testemail", "password": "testpassword"})
    });

    it("should call postLoginSaga with malformed error", async () => {
        api.postLogin.mockRejectedValue("error");
        const dispatched = await recordSaga(postLoginSaga, {}, state);
        expect(dispatched).toContainEqual(loadError("Something went wrong, contact us for further informations."));
        expect(api.postLogin).toBeCalledTimes(1);
        expect(api.postLogin).toHaveBeenCalledWith({"email": "testemail", "password": "testpassword"})
    });

    it("should call postLoginSaga with known error", async () => {
        api.postLogin.mockRejectedValue({error_message: "test known error"});
        const dispatched = await recordSaga(postLoginSaga, {}, state);
        expect(dispatched).toContainEqual(loadError("test known error"));
        expect(api.postLogin).toBeCalledTimes(1);
        expect(api.postLogin).toHaveBeenCalledWith({"email": "testemail", "password": "testpassword"})
    });

})