import React from 'react';

import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <Link className={styles.link} to="/">
          Home
        </Link>
        <Link className={styles.link} to="/characters">
          Character
        </Link>
        <Link className={styles.link} to="/comics">
          Comics
        </Link>
        <Link className={styles.link} to="/series">
          Comic-Series
        </Link>
      </div>
      <div className={`${styles.data} ${styles.link_portfolio}`}>
        <a href="https://www.iknorr.com" target="blank" alt="www.iknorr.com">
          Made by iKnorr
        </a>
      </div>
      <div className={styles.data}>Data provided by Marvel. © 2022 MARVEL</div>
    </footer>
  );
};

export default Footer;
