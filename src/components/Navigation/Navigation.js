import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import styles from './Navigation.module.css';

export default function Navigation() {
    const isAuthenticated = useSelector(authSelectors.getIsLoggedIn);
    return ( 
        <nav>
            <NavLink
                to="/"
                exact
                style={styles.link}
                activeStyle={styles.activeLink}
            >
                Home page
            </NavLink>

            {isAuthenticated && (
                <NavLink
                    to="/contacts"
                    exact
                    style={styles.link}
                    activeStyle={styles.activeLink}
                >
                    Contacts
                </NavLink>
            )}
        </nav>
    )};


