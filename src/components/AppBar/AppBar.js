import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { authSelectors } from '../../redux/auth';

import styles from './AppBar.module.css'

export default function AppBar() {
    const isAuthenticated = useSelector(authSelectors.getIsLoggedIn);
    
    return (
    <header style={styles.header}>
        <Navigation />
        
            {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
    );
};