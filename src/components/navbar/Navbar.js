import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { useIsMedium } from '../../hooks/useMediaQuery';

import ImageLogo from '../../images/marvel_logo.png';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const linkIsActive = ({ isActive }) =>
    isActive ? `${styles.active} ${styles.link}` : styles.link;

  const isMedium = useIsMedium();

  const variants = isMedium
    ? {
        closed: {
          opacity: 0,
          transition: {
            when: 'afterChildren',
          },
        },
        open: {
          opacity: 1,
          transition: {
            when: 'beforeChildren',
            staggerChildren: 0.1,
          },
        },
      }
    : {
        closed: {
          opacity: 1,
          transition: {
            when: 'afterChildren',
          },
        },
        open: {
          opacity: 0,
          transition: {
            when: 'beforeChildren',
            staggerChildren: 0.3,
          },
        },
      };

  const item = isMedium
    ? {
        closed: { opacity: 0 },
        open: { opacity: 1 },
      }
    : {
        closed: { opacity: 1 },
        open: { opacity: 1 },
      };
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
        <motion.div
          className={
            isNavExpanded
              ? `${styles.navbar_menu} ${styles.expanded}`
              : `${styles.navbar_menu}`
          }
          animate={isNavExpanded ? 'open' : 'closed'}
          variants={variants}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          {/* <div className={isNavExpanded ? 'navbar_menu expanded' : 'navbar_menu'}> */}
          <ul>
            <NavLink to="/" className={linkIsActive}>
              <motion.li variants={item}>Home</motion.li>
            </NavLink>
            <NavLink to="/characters" className={linkIsActive}>
              <motion.li variants={item}>Characters</motion.li>
            </NavLink>
            <NavLink to="/comics" className={linkIsActive}>
              <motion.li variants={item}>Comics</motion.li>
            </NavLink>
            <NavLink to="/series" className={linkIsActive}>
              <motion.li variants={item}>Comic-Series</motion.li>
            </NavLink>
          </ul>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
