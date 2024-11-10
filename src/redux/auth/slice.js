import { createSlice } from "@reduxjs/toolkit";
import { apiLoginUser, apiRegisterUser } from "./operations";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  isError: null,
  isLoading: false,

  token: null,
  isLoggedIn: false,
  isRefreshing: false,
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
        state.isLoggedIn = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
      })
      .addCase(apiLoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(apiRegisterUser.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
      })
      .addCase(apiLoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      }),
});
export const authReducer = authSlice.reducer;
