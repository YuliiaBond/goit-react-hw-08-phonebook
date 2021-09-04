import axios from 'axios';
import { addContactError, addContactRequest, addContactSuccess, deleteContactError, deleteContactRequest, deleteContactSuccess, fetchContactError, fetchContactRequest, fetchContactSuccess } from './actions';


export const fetchContacts = () => async dispatch => {
    dispatch(fetchContactRequest());

    try {
        const { data } = await axios.get('/contacts');

        dispatch(fetchContactSuccess(data));
    } catch (error) {
        dispatch(fetchContactError(error));
    }

    // axios
    //     .get('/contacts')
    //     .then(({ data }) => dispatch(fetchContactSuccess(data)))
    //     .catch(error => dispatch(fetchContactError(error)));
};

export const addContact = ({ name, number }) => async dispatch => {
    const contact = {
        name,
        number,
    };

    dispatch(addContactRequest());

    try {
        const { data } = await axios.post(`/contacts`, contact);

        dispatch(addContactSuccess(data));
    } catch (error) {
        dispatch(addContactError(error));
    }

    // axios
    //     .post('/contacts', contact)
    //     .then(({ data }) => dispatch(addContactSuccess(data)))
    //     .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = contactId => async dispatch => {
    dispatch(deleteContactRequest());

    try {
        await axios.delete(`/contacts/${contactId}`);
        dispatch(deleteContactSuccess(contactId));
    } catch (error) {
        dispatch(deleteContactError(error));
    }

    // axios
    //     .delete(`/contacts/${contactId}`)
    //     .then(() => dispatch(deleteContactSuccess(contactId)))
    //     .catch(error => dispatch(deleteContactError(error)));
};