import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from '../../redux/contacts/operation';
import contactsSelectors from '../../redux/contacts/selectors';
import style from './Form.module.css'

export default function Form() {
    const dispatch = useDispatch();
    const contacts = useSelector(contactsSelectors.getContacts);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    // console.log(contacts);

    const handleChange = event => {
        const { name, value } = event.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'number':
                setNumber(value);
                break;
            
            default:
                return;
        }
    };

    const hadleSubmit = event => {
        event.preventDefault();

        if (!name || !number) {
            return;
        }

        if (contacts.map(contact => contact.name).includes(name)) {
            return alert(`${name} is already in contacs.`)
        }

        dispatch(contactsOperations.addContact({ name, number }));
        setName('');
        setNumber('');
    };
    
        return (
            <form className={style.form} onSubmit={hadleSubmit}>
                <label className={style.label}>
                Name
                <input
                    className={style.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    value={name}
                    onChange={handleChange}
                    // id={nameInputId}
                />
                </label>

                <label className={style.label}>
                Number
                <input
                    className={style.input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    value={number}
                    onChange={handleChange}
                    // id={numberInpntId}
                />
                </label>

                <button className={style.btn} typy="submit">Add contact</button>
            </form>
        )
    }

