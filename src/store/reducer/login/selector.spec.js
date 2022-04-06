import { loginData, errorLogin, isLoginLoading, isLoginSuccess } from "./selectors";

describe("loginSelector test", () => {

    const state = {
        login: {
            email: "test",
            password: "",
            error: "Error login",
            status: "loading"
        }
    }

    it("selector loginData", () => {
        expect(loginData(state)).toEqual({
            email: "test",
            password: ""
        })
    })
    it("selector errorLogin", () => {
        expect(errorLogin(state)).toEqual("Error login")
    })
    it("selector loading", () => {
        expect(isLoginLoading(state)).toEqual(true)
    })

    it("selector success", () => {
        expect(isLoginSuccess(state)).toEqual(false)
    })


});