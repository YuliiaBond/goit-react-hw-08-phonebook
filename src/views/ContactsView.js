import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../components/Container';
import Phonebook from '../components/Phonebook';
import { contactsOperations } from '../redux/contacts';

export default function ContactsView(params) {
    const dispatch = useDispatch();
    // const isLoadingContacts = useSelector(contactsSelectors.getLoading);

    useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);
    
    return (
        <Container>
            <Phonebook />
        </Container>
    );
};