import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.item;
const getFilter = state => state.contacts.filter;
const getError = state => state.contacts.error;
const getLoading = state => state.contacts.loading;

const getVisibleContacts = createSelector(
    [getContacts, getFilter],
    (contacts, value) => {
        const normalizeFilter = value.toLowerCase();
        return contacts.filter(({name}) =>
            name.toLowerCase().includes(normalizeFilter),
        );
    },
);

const contactsSelectors = {
    getContacts,
    getFilter,
    getError,
    getLoading,
    getVisibleContacts,
};

export default contactsSelectors;
