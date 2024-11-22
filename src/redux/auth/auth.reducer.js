import { createSlice } from "@reduxjs/toolkit"; 
import { authOperations } from "./auth.operations";

const initialState = {
    user: { name: "", email: "", birthday: "", avatar: "" },
    token: "",
    isLoggedIn: false,
    isRefreshing: false,
    isSubscribed: false,
    theme: "dark",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(authOperations.signUp.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = false;
            })
            .addCase(authOperations.signIn.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
            });
    },
});

export const authReducer = authSlice.reducer;