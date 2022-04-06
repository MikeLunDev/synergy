import apiClient from "./apiClient";

/* PUT YOUR APIs HERE */

export const postLogin = async (loginData) => {
    const response = await apiClient.post("/account/login", loginData, { validateStatus: (s) => s < 500 });
    if (response?.data?.error_message) {
        const error = {
            error_message: response.data.error_message
        }
        throw error
    }
    return response.data

};

export const postSignup = async (signupData) => {
    const response = await apiClient.post("/account/signup", signupData, { validateStatus: (s) => s < 500 });
    if (response?.data?.error_message) {
        const error = {
            error_message: response.data.error_message
        }
        throw error
    }
    return response.data

};