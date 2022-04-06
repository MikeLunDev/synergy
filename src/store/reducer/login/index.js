import { createSlice } from "@reduxjs/toolkit";
import { statuses } from "../../../constants";

export const initialState = {
    status: statuses.IDLE,
    data: {},
    error: "",
    search: "",
    email: "",
    password: "",
};

const filtersSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginStart: (state, action) => {
            state.status = statuses.LOADING;
            state.error = "";
            state.email = action.payload.email
            state.password = action.payload.password
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
            state.email = "";
            state.password = "";
        }
    }
});

const { actions, reducer } = filtersSlice;
export const {
    loadSuccess, loadError, loadReset, loginStart
} = actions;
export default reducer;