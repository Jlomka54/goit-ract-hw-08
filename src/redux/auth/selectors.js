export const selectUserData = (state) => state.auth.user;
export const selectUserDataIsLoading = (state) => state.auth.isLoading;
export const selectUserDatError = (state) => state.auth.isError;
export const selectUserDataIsToken = (state) => state.auth.token;
export const selectUserDataIsRefresh = (state) => state.auth.isRefreshing;
export const selectUserDataIsLoggedIn = (state) => state.auth.isLoggedIn;
