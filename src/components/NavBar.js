import React, {useState} from 'react';
import styles from './NavBar.module.css';
import {NavLink} from 'react-router-dom';

function NavBar() {
    const [navLinkOpen, navLinkToggle] = useState(false)

    function handleNavLinksToggle() {
        navLinkToggle(!navLinkOpen);
    }

    function renderClasses() {
        let classes = styles["nav-links"]

        if (navLinkOpen) {
            classes += "active"
        }
        return classes
    }

    return (
        <>
            <nav>
            <NavLink className={styles["title-navbar"]} exact to="/" activeClassName="selected">
            Home
            </NavLink>
            <ul className={renderClasses()}>
            <li className={styles.link}>
            <NavLink to="/about" activeClassName="selected">
            About
            </NavLink></li>
            <li className={styles.link}>
            <NavLink to="/contact" activeClassName="selected">
            Contact
            </NavLink>
            </li>
            <li className={styles.link}>
            <NavLink to="/service" activeClassName="selected">
            Service
            </NavLink>
            </li>
            <li className={styles.link}>
            <NavLink to="/sign-up" activeClassName="selected">
            Sign Up
            </NavLink>
                    </li>
                    <li className={styles['nav-btn']}>
            <NavLink exact to="/sign-in" activeClassName="selected">
                         Sign In
                      </NavLink>
                  </li>
              </ul>
                <div onClick={handleNavLinksToggle} className={styles["hamburger-toggle"]}>
                    <i className="fas fa-bars fa-lg"> </i>
               </div>
            </nav>
        </>
    );
}

export default NavBar;

