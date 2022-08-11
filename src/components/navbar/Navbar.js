import React from 'react';

import { NavLink } from 'react-router-dom';

import ImageLogo from '../../images/marvel_logo.png';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const linkIsActive = ({ isActive }) =>
    isActive ? `${styles.active} ${styles.link}` : styles.link;

  return (
    <React.Fragment>
      <nav className={styles.navbar}>
        <a href="https://www.marvel.com/" target="_blank" rel="noreferrer">
          <img src={ImageLogo} className={styles.img_logo} alt="logo" />
        </a>
        <div>
          <NavLink
            to="/"
            className={linkIsActive}
            // className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            Home
          </NavLink>
          <NavLink
            to="/characters"
            className={linkIsActive}
            // className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            Characters
          </NavLink>
          <NavLink
            to="/comics"
            className={linkIsActive}
            // className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            Comics
          </NavLink>
          <NavLink to="/series" className={linkIsActive}>
            Comic-Series
          </NavLink>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
