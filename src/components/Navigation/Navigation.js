import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAuthenticated } from '../../redux/auth';
import styles from './Navigation.module.css';

export default function Navigation() {
    const isAuthenticated = useSelector(getIsAuthenticated);
    return ( 
        <nav>
            <NavLink
                to="/"
                exact
                style={styles.link}
                activeStyle={styles.active_link}
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


