import { createSlice } from "@reduxjs/toolkit";

import { apiAddContact, apiDeleteContact, apiGetContacts } from "./operations";

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,

  extraReducers: (builder) =>
    builder
      .addCase(apiGetContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(apiGetContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(apiAddContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiAddContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(apiAddContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(apiDeleteContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiDeleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(apiDeleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const contactsReducer = contactsSlice.reducer;
