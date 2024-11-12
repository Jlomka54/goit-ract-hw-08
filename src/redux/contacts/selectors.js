import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filter/selectors";

export const selectContacts = (state) => state.contactsData.items;
export const selectLoading = (state) => state.contactsData.loading;
export const selectError = (state) => state.contactsData.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) return contacts;
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
