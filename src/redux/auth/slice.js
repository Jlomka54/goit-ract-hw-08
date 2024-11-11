import { createSlice } from "@reduxjs/toolkit";
import { apiGetCurrentUser, apiLoginUser, apiRegisterUser } from "./operations";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  isError: null,
  isLoading: false,

  token: null,
  isLoggedIn: false,
  isRefreshing: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(apiRegisterUser.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
      })
      .addCase(apiRegisterUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(apiLoginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
      })
      .addCase(apiLoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(apiGetCurrentUser.pending, (state) => {
        state.isRefreshing = true;
        state.isError = null;
      })
      .addCase(apiGetCurrentUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
      })
      .addCase(apiGetCurrentUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.isError = action.payload;
      }),
});
export const authReducer = authSlice.reducer;
