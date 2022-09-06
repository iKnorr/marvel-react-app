import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

import ImageLogo from '../../images/marvel_logo.png';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const linkIsActive = ({ isActive }) =>
    isActive ? `${styles.active} ${styles.link}` : styles.link;

  // const navbarActive = ({ isNavExpanded }) =>
  //   isNavExpanded
  //     ? `${styles.navbar_menu} ${styles.navbar_menu.expanded}`
  //     : styles.navbar_menu;

  return (
    <>
      <nav className={styles.navbar}>
        <a href="https://www.marvel.com/" target="_blank" rel="noreferrer">
          <img src={ImageLogo} className={styles.img_logo} alt="logo" />
        </a>
        <button
          className={styles.hamburger}
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          <GiHamburgerMenu />
        </button>
        <div
          className={
            isNavExpanded
              ? `${styles.navbar_menu} ${styles.expanded}`
              : `${styles.navbar_menu}`
          }
        >
          {/* <div className={isNavExpanded ? 'navbar_menu expanded' : 'navbar_menu'}> */}
          <ul>
            <li>
              <NavLink to="/" className={linkIsActive}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/characters" className={linkIsActive}>
                Characters
              </NavLink>
            </li>
            <li>
              <NavLink to="/comics" className={linkIsActive}>
                Comics
              </NavLink>
            </li>
            <li>
              <NavLink to="/series" className={linkIsActive}>
                Comic-Series
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
