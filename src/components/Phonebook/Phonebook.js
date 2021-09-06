import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from '../../redux/contacts/operation';
import contactsSelector from '../../redux/contacts/selectors';

import Form from '../Form';
import Filter from '../Filter';
import Contacts from '../Contacts';
import Loader from '../Loader';
import styles from './Phonebook.module.css'

export default function Phonebook() {
    const dispatch = useDispatch();
    const isLoading = useSelector(contactsSelector.getLoading);

    useEffect(() => {
        dispatch(contactsOperations.fetchContacts());
    }, [dispatch]);

    return (
        <div className={styles.bar}>
            <h1>Phonebook</h1>
            <Form />

            {isLoading ? (
                <>
                    <h2>Contacts</h2>
                    <Filter />
                    <Contacts />
                </>
            ) : (
                <Loader />
            )}
        </div>

    )

}