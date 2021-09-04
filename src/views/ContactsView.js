// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/Container';
import Form from '../components/Form';
import Filter from '../components/Filter';
import Contacts from '../components/Contacts';
import styles from './Styles.module.css';

export default function TodosView(params) {
    // const dispatch = useDispatch();
//   const isLoadingContacts = useSelector(todosSelectors.getLoading);
    

    // useEffect(() => dispatch(contactsOperations.fetchTodos()), [dispatch]);

    return (
        <Container>
            <div style={styles.bar}>
                <h1>Phonebook</h1>

                <Form />

                <h2>Contacts</h2>

                <Filter />

                {/* {isLoadingContacts && <h1>Loading...</h1>} */}
            </div>

            <Contacts />

        </Container>
    );
};