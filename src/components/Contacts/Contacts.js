import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {contactsOperations, contactsSelectors } from '../../redux/contacts';
import Contact from '../Contact/Contact';
import style from './Contacts.module.css'

const Contacts = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(contactsSelectors.getVisibleContacts);
    const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

    return (
        <ul className={style.list}>
        {contacts.map(({ id, name, number }) => (
            <li key={id} className={style.item}>
                <Contact
                    name={name}
                    number={number}
                    onDeleteContact={() => onDeleteContact(id)}
                    />
            </li>
        ))}
        
    </ul>
    )
    
};

export default Contacts;