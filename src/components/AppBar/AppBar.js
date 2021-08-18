import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import styles from './AppBar.module.css'

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    
    return (
    <header style={styles.header}>
        <Navigation />
        
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
    );
};