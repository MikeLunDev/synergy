import { statuses } from "../../../constants"

export const signupData = state => state.signup.payloadSignup
export const errorSignup = state => state.signup.error
export const isSignupLoading = state => state.signup.status === statuses.LOADING
export const isSignupSuccess = state => state.signup.status === statuses.SUCCESS