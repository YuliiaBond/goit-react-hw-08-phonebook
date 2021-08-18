import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
    <nav>
        <NavLink
            to="/"
            exact
            style={styles.link}
            activeStyle={styles.active_link}
        >
            Home page
        </NavLink>

        <NavLink
            to="/contacts"
            exact
            style={styles.link}
            activeStyle={styles.activeLink}
        >
            Contacts
        </NavLink>
    </nav>
);

export default Navigation;
