import { createSlice } from "@reduxjs/toolkit";
import { statuses } from "../../../constants";

export const initialState = {
    status: statuses.IDLE,
    data: {},
    error: "",
    search: "",
    payloadSignup: {}
};

const filtersSlice = createSlice({
    name: "signup",
    initialState,
    reducers: {
        signupStart: (state, action) => {
            state.status = statuses.LOADING;
            state.error = "";
            state.payloadSignup = action.payload
        },
        loadSuccess(state, action) {
            state.status = statuses.SUCCESS;
            state.error = "";
            state.data = action.payload
        },
        loadError(state, action) {
            state.status = statuses.ERROR;
            state.error = action.payload;
        },
        loadReset(state) {
            state.status = statuses.IDLE;
            state.error = "";
            state.search = "";
        }
    }
});

const { actions, reducer } = filtersSlice;
export const {
    loadSuccess, loadError, loadReset, signupStart
} = actions;
export default reducer;