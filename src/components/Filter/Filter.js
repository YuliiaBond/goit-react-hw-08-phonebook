import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/contacts';
import contactsSelectors from '../../redux/contacts/selectors';
import style from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(contactsSelectors.getFilter);

    const onChange = event => dispatch(filterContact(event.target.value));

    return (
        <label className={style.label}>
            Find contacts by name
            <input className={style.input} type="text" onChange={onChange} value={filter} name="filter" />
        </label>

    )
    
};

export default Filter;