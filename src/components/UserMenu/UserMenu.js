import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername, logOut } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
import styles from './UserMenu.module.css';

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(getUsername);
    const onLogout = useCallback(() => dispatch(logOut()), [dispatch]);

    return (
        <div style={styles.container}>
            <img src={defaultAvatar} alt="avatar" width="32" style={styles.avatar} />
            <span style={styles.name}>Welcome, {name}</span>
            
            <button type="button" onClick={onLogout}>
                Exit
            </button>
        </div>
    );
};