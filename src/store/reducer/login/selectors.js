import { statuses } from "../../../constants"

export const loginData = state => {
    return {
        email: state.login.email,
        password: state.login.password
    }
}
export const errorLogin = state => state.login.error
export const isLoginLoading = state => state.login.status === statuses.LOADING
export const isLoginSuccess = state => state.login.status === statuses.SUCCESS