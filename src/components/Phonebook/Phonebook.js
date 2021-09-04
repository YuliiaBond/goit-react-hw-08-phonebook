import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operation';
import { getLoading } from '../../redux/selectors';

import Form from '../Form';
import Filter from '../Filter';
import Contacts from '../Contacts';
import Loader from '../Loader';


export default function Phonebook() {
    const dispatch = useDispatch();
    const isLoading = useSelector(getLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>
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